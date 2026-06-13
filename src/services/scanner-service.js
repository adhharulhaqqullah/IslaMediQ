/* ============================================================
   IslaMediQ — Scanner Service
   Barcode scanning + ingredient analysis + halal check
   ============================================================ */

import { halalDatabase } from '../data/halal-ingredients.js';
import { getState, setState } from '../store.js';

let html5QrCode = null;
let scannerActive = false;

/**
 * Initialize barcode scanner on a container element
 */
export async function initScanner(containerId, onResult) {
  try {
    const { Html5Qrcode } = await import('html5-qrcode');
    html5QrCode = new Html5Qrcode(containerId);

    const cameras = await Html5Qrcode.getCameras();
    if (!cameras || cameras.length === 0) {
      throw new Error('Tidak ada kamera yang ditemukan');
    }

    // Prefer back camera
    const backCam = cameras.find(c => c.label.toLowerCase().includes('back') || c.label.toLowerCase().includes('belakang'));
    const cameraId = backCam ? backCam.id : cameras[0].id;

    await html5QrCode.start(
      cameraId,
      { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.0 },
      (decodedText) => {
        if (onResult) onResult(decodedText);
      },
      () => {} // ignore per-frame errors
    );

    scannerActive = true;
    return true;
  } catch (err) {
    console.error('Scanner init error:', err);
    throw err;
  }
}

/**
 * Stop scanner and release camera
 */
export async function stopScanner() {
  if (html5QrCode && scannerActive) {
    try {
      await html5QrCode.stop();
      html5QrCode.clear();
    } catch (e) {
      console.warn('Scanner stop warning:', e);
    }
    scannerActive = false;
  }
}

/**
 * Analyze ingredient text and match against databases
 */
export function analyzeIngredients(text) {
  if (!text) return { ingredients: [], thibbuNabawi: [] };

  const normalized = text.toLowerCase().trim();
  const foundIngredients = [];
  const foundThibbuNabawi = [];

  // Check haram ingredients
  halalDatabase.haram.forEach(item => {
    if (normalized.includes(item.name.toLowerCase()) ||
        (item.code && normalized.includes(item.code.toLowerCase()))) {
      foundIngredients.push({ ...item, status: 'haram' });
    }
  });

  // Check syubhat ingredients
  halalDatabase.syubhat.forEach(item => {
    if (normalized.includes(item.name.toLowerCase()) ||
        (item.code && normalized.includes(item.code.toLowerCase()))) {
      foundIngredients.push({ ...item, status: 'syubhat' });
    }
  });

  // Check halal ingredients
  halalDatabase.halal.forEach(item => {
    if (normalized.includes(item.name.toLowerCase()) ||
        (item.code && normalized.includes(item.code.toLowerCase()))) {
      foundIngredients.push({ ...item, status: 'halal' });
    }
  });

  // Check Thibbun Nabawi ingredients
  halalDatabase.thibbuNabawi.forEach(item => {
    if (normalized.includes(item.name.toLowerCase())) {
      foundThibbuNabawi.push(item);
    }
  });

  return { ingredients: foundIngredients, thibbuNabawi: foundThibbuNabawi };
}

/**
 * Determine overall halal status
 */
export function checkHalalStatus(ingredients) {
  if (!ingredients || ingredients.length === 0) {
    return { status: 'unknown', label: 'Tidak Diketahui', details: [] };
  }

  const hasHaram = ingredients.some(i => i.status === 'haram');
  const hasSyubhat = ingredients.some(i => i.status === 'syubhat');

  if (hasHaram) {
    return {
      status: 'haram',
      label: 'HARAM',
      emoji: '❌',
      details: ingredients.filter(i => i.status === 'haram')
    };
  }
  if (hasSyubhat) {
    return {
      status: 'syubhat',
      label: 'SYUBHAT',
      emoji: '⚠️',
      details: ingredients.filter(i => i.status === 'syubhat')
    };
  }
  return {
    status: 'halal',
    label: 'HALAL',
    emoji: '✅',
    details: ingredients.filter(i => i.status === 'halal')
  };
}

/**
 * Save scan result to history
 */
export function saveScanResult(barcode, result) {
  const history = getState('scanHistory') || [];
  history.unshift({
    id: Date.now(),
    date: new Date().toISOString(),
    barcode,
    status: result.status,
    label: result.label,
    ingredientCount: result.details.length
  });
  if (history.length > 50) history.pop();
  setState('scanHistory', history);
}
