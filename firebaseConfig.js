import { getApp, getApps, initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export function getFirebaseConfig(env = {}) {
  const source = { ...(typeof process !== 'undefined' ? process.env : {}), ...env };
  return {
    apiKey: source.FIREBASE_API_KEY,
    authDomain: source.FIREBASE_AUTH_DOMAIN,
    projectId: source.FIREBASE_PROJECT_ID,
    storageBucket: source.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: source.FIREBASE_MESSAGING_SENDER_ID,
    appId: source.FIREBASE_APP_ID,
  };
}

export function initFirebase(env = {}) {
  const firebaseConfig = getFirebaseConfig(env);
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = initializeFirestore(app, { experimentalAutoDetectLongPolling: true });
  const auth = getAuth(app);
  return { app, db, auth, firebaseConfig };
}
