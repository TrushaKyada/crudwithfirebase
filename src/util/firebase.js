// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };

//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app