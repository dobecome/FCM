const { initializeApp } = require('firebase-admin/app');

const app = initializeApp({
    // credential: applicationDefault(),
    // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});
console.log(app);