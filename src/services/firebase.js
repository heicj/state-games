import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyA4zccl4_f9HfK3yPbCYaOFOcJ2MhsUnbc',
  authDomain: 'escape-house2.firebaseapp.com',
  databaseURL: 'https://escape-house2.firebaseio.com',
  projectId: 'escape-house2',
  storageBucket: 'escape-house2.appspot.com',
  messagingSenderId: '952678983368'
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();

export const providers = firebase.auth;
