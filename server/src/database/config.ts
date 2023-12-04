import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.CONFIG_FIREBASE_APIKEY,
  authDomain: process.env.CONFIG_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.CONFIG_FIREBASE_PROJECT_ID,
  storageBucket: process.env.CONFIG_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.CONFIG_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.CONFIG_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);

export default getFirestore(app);
