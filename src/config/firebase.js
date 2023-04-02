import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD81s9zPx6c012TAWqL1Ubx8ttaPtmf0wU",
  authDomain: "first-project-e17d3.firebaseapp.com",
  projectId: "first-project-e17d3",
  storageBucket: "first-project-e17d3.appspot.com",
  messagingSenderId: "998526449596",
  appId: "1:998526449596:web:c2d18ded79ff5750cb9db9",
  measurementId: "G-63404KQTVK"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
