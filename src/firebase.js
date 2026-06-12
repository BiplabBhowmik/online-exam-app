import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx_RhMmSMle7pr8jA8hTfxiPDT9zznlQI",
  authDomain: "online-exam-app-a695a.firebaseapp.com",
  projectId: "online-exam-app-a695a",
  storageBucket: "online-exam-app-a695a.firebasestorage.app",
  messagingSenderId: "261820724974",
  appId: "1:261820724974:web:16efeaeca3c13b933f65ff",
  measurementId: "G-51ZKQE5R71"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;