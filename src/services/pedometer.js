/* ============================================================
   IslaMediQ — Pedometer Service
   Uses DeviceMotionEvent API for broad compatibility (iOS + Android)
   Threshold-based peak detection with debounce
   ============================================================ */

import { getState, setState } from '../store.js';

// Step detection configuration
const STEP_THRESHOLD = 1.2;       // Acceleration magnitude threshold (g-force delta)
const MIN_INTERVAL = 300;          // Minimum ms between steps (debounce)
const SMOOTHING_FACTOR = 0.8;     // Low-pass filter alpha
const SAMPLE_RATE = 60;            // Expected samples per second

// Internal state
let isListening = false;
let motionHandler = null;
let lastStepTime = 0;
let lastMagnitude = 0;
let smoothedMagnitude = 0;
let wasAboveThreshold = false;
let stepCallback = null;

/**
 * Request motion sensor permission (required on iOS 13+)
 * @returns {Promise<boolean>} Whether permission was granted
 */
export async function requestMotionPermission() {
  // iOS 13+ requires explicit permission via user gesture
  if (
    typeof DeviceMotionEvent !== 'undefined' &&
    typeof DeviceMotionEvent.requestPermission === 'function'
  ) {
    try {
      const permission = await DeviceMotionEvent.requestPermission();
      if (permission === 'granted') {
        return true;
      }
      console.warn('Motion permission denied by user');
      return false;
    } catch (error) {
      console.error('Motion permission request failed:', error);
      return false;
    }
  }

  // Android and other platforms: no permission needed
  if (typeof DeviceMotionEvent !== 'undefined') {
    return true;
  }

  // DeviceMotionEvent not available at all
  console.warn('DeviceMotionEvent is not supported on this device');
  return false;
}

/**
 * Start the pedometer
 * @param {function} onStep - Callback fired on each detected step, receives current step count
 * @returns {boolean} Whether pedometer started successfully
 */
export function startPedometer(onStep) {
  if (isListening) {
    console.warn('Pedometer already running');
    return true;
  }

  if (typeof DeviceMotionEvent === 'undefined') {
    console.error('DeviceMotionEvent not supported');
    return false;
  }

  stepCallback = onStep || null;
  lastStepTime = 0;
  lastMagnitude = 0;
  smoothedMagnitude = 0;
  wasAboveThreshold = false;

  motionHandler = handleMotionEvent;
  window.addEventListener('devicemotion', motionHandler, { passive: true });
  isListening = true;

  setState('steps.isTracking', true);

  return true;
}

/**
 * Stop the pedometer
 */
export function stopPedometer() {
  if (!isListening) return;

  if (motionHandler) {
    window.removeEventListener('devicemotion', motionHandler);
    motionHandler = null;
  }

  isListening = false;
  stepCallback = null;

  setState('steps.isTracking', false);
}

/**
 * Get current step count for today
 * @returns {number}
 */
export function getStepCount() {
  // Check for daily reset
  checkDayChange();
  return getState('steps.today') || 0;
}

/**
 * Reset step count to zero
 */
export function resetSteps() {
  setState('steps.today', 0);
}

/**
 * Check if pedometer is currently active
 * @returns {boolean}
 */
export function isTracking() {
  return isListening;
}

/**
 * Handle incoming DeviceMotionEvent
 * Uses accelerationIncludingGravity for broad device support
 */
function handleMotionEvent(event) {
  const accel = event.accelerationIncludingGravity;

  if (!accel || accel.x === null || accel.y === null || accel.z === null) {
    return;
  }

  const x = accel.x || 0;
  const y = accel.y || 0;
  const z = accel.z || 0;

  // Calculate acceleration magnitude
  const magnitude = Math.sqrt(x * x + y * y + z * z);

  // Low-pass filter to smooth out noise
  smoothedMagnitude = SMOOTHING_FACTOR * smoothedMagnitude + (1 - SMOOTHING_FACTOR) * magnitude;

  // Calculate delta from gravity (~9.81)
  const delta = Math.abs(smoothedMagnitude - 9.81);

  const now = Date.now();
  const isAboveThreshold = delta > STEP_THRESHOLD;

  // Detect step: transition from above threshold to below (peak detection)
  if (wasAboveThreshold && !isAboveThreshold) {
    // Debounce: ensure minimum interval between steps
    if (now - lastStepTime >= MIN_INTERVAL) {
      lastStepTime = now;
      registerStep();
    }
  }

  wasAboveThreshold = isAboveThreshold;
  lastMagnitude = magnitude;
}

/**
 * Register a detected step
 */
function registerStep() {
  checkDayChange();

  const currentSteps = (getState('steps.today') || 0) + 1;
  setState('steps.today', currentSteps);

  // Notify callback
  if (stepCallback) {
    stepCallback(currentSteps);
  }
}

/**
 * Check if the day has changed and archive yesterday's steps
 */
function checkDayChange() {
  const today = new Date().toISOString().split('T')[0];
  const history = getState('steps.history') || [];

  // Check if the last history entry is from today
  if (history.length > 0) {
    const lastEntry = history[history.length - 1];
    if (lastEntry.date === today) {
      return; // Already have today's entry started
    }
  }

  // If we have steps from a previous session and it's a new day, archive them
  const currentSteps = getState('steps.today') || 0;
  if (currentSteps > 0) {
    // Figure out yesterday's date
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const existingIdx = history.findIndex(h => h.date === yesterday);

    if (existingIdx < 0) {
      const newHistory = [...history, { date: yesterday, steps: currentSteps }];
      // Keep only last 30 days
      if (newHistory.length > 30) newHistory.shift();
      setState('steps.history', newHistory);
    }

    // Reset today's count
    setState('steps.today', 0);
  }
}

/**
 * Get step goal for today
 * @returns {number}
 */
export function getStepGoal() {
  return getState('steps.goal') || 6000;
}

/**
 * Set step goal
 * @param {number} goal
 */
export function setStepGoal(goal) {
  if (typeof goal === 'number' && goal > 0) {
    setState('steps.goal', goal);
  }
}

/**
 * Get step history (last 30 days)
 * @returns {Array<{date: string, steps: number}>}
 */
export function getStepHistory() {
  return getState('steps.history') || [];
}

/**
 * Calculate progress percentage toward daily goal
 * @returns {number} 0–100
 */
export function getProgress() {
  const steps = getStepCount();
  const goal = getStepGoal();
  return Math.min(Math.round((steps / goal) * 100), 100);
}

/**
 * Estimate calories burned from steps
 * Rough estimate: ~0.04 kcal per step (average walking)
 * @returns {number}
 */
export function getCaloriesBurned() {
  return Math.round(getStepCount() * 0.04);
}

/**
 * Estimate distance walked in km
 * Average step length ~0.72m
 * @returns {number}
 */
export function getDistanceKm() {
  return parseFloat((getStepCount() * 0.00072).toFixed(2));
}
