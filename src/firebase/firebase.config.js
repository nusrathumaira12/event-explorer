
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl91j3pgesYCwSXRmyaR0H7bHZtiivp2M",
  authDomain: "event-explorer-auth-proj-b8c6b.firebaseapp.com",
  projectId: "event-explorer-auth-proj-b8c6b",
  storageBucket: "event-explorer-auth-proj-b8c6b.firebasestorage.app",
  messagingSenderId: "304683612267",
  appId: "1:304683612267:web:5ae03db753335cbdb9592e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)