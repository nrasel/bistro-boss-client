import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
//   measurementId: import.meta.env.VITE_measurementId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAHj7TK_rzTq1M1dSPELYbxfZ4lvgpyHsU",
  authDomain: "bistro-boss-9d5df.firebaseapp.com",
  projectId: "bistro-boss-9d5df",
  storageBucket: "bistro-boss-9d5df.appspot.com",
  messagingSenderId: "374693979405",
  appId: "1:374693979405:web:ee7f610877a0b75b457c44",
  measurementId: "G-SRRKTFTCZC",
};

export const app = initializeApp(firebaseConfig);
