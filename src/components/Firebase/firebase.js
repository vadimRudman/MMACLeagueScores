import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyC-QUwUTHvvXgxzToLTnhKTMXGI_kt6lw4",
    authDomain: "mmacleaguescores.firebaseapp.com",
    databaseURL: "https://mmacleaguescores.firebaseio.com",
    projectId: "mmacleaguescores",
    storageBucket: "mmacleaguescores.appspot.com",
    messagingSenderId: "549332610825",
    appId: "1:549332610825:web:2de79ce7be0e1bb6bbedd8",
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;
