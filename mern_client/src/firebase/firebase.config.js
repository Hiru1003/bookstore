// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpkYJxaEhpl-Ib0EpvXMJsuQu9GRlYlF0",
  authDomain: "bookstore-ca983.firebaseapp.com",
  projectId: "bookstore-ca983",
  storageBucket: "bookstore-ca983.appspot.com",
  messagingSenderId: "174123236890",
  appId: "1:174123236890:web:43527ad060d08e8b715ba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;