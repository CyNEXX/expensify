import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
firebase.initializeApp(config);
/* firebase.analytics(); */

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

/* database.ref('notes'); */

/* database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
}, (error) => { console.log('Error', error); }); */

/* database.ref('expenses').on('child_removed', (snapshot) => {
    console.log('Removed: ', snapshot.key, snapshot.val());
}, (error) => { console.log('Error', error); });

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log('Changed: ', snapshot.key, snapshot.val());
}, (error) => { console.log('Error', error); });


database.ref('expenses').on('child_added', (snapshot) => {
    console.log('Added: ', snapshot.key, snapshot.val());
}, (error) => { console.log('Error', error); }); */

/* const expenses = [{
    description: 'abc',
    note: 'note1',
    amount: 45,
    createdAt: 50
}, {
    description: 'def',
    note: 'note2',
    amount: 70,
    createdAt: 100
}, {
    description: 'ghi',
    note: 'note3',
    amount: 24,
    createdAt: 1000
}]; */
/*
expenses.forEach((expense) => {
    database.ref('notes').push(expense);
}); */

/* database.ref('expenses').push(expenses[0]);
database.ref('expenses').push(expenses[1]);
database.ref('expenses').push(expenses[2]); */

/* database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    }); */



/* const onJobChange = database.ref().on('value',
    (snapshot) => {
        const val = snapshot.val();
        console.log(`${val.name} is a ${val.job.title} @ ${val.job.company}`);
    },
    (error) => { console.log('Error', error); });

setTimeout(() => {
    database.ref('job').update({
        company: 'Amazon'
    });
}, 3500);

setTimeout(() => {
    database.ref('job').update({
        company: 'Blizzard'
    });
}, 5500);

setTimeout(() => {
    database.ref().off(onJobChange);
}, 7000);

setTimeout(() => {
    database.ref('job').update({
        company: 'Electronic Arts'
    });
}, 10500); */

/* const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(val);
}, (error) => { console.log('Error', error); });

setTimeout(() => {
    database.ref('age').set(28);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500); */

/* database.ref()
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((error) => {
        console.log('Error fetching data', console.error(error));
    }); */

/* database.ref().set({
    name: '_CyNEXX_',
    age: 35,
    stressLevel: 6,
    job: {
        company: 'Google',
        title: 'Software Developer'
    },
    location: {
        city: 'Buzau',
        country: 'Romania'
    },

});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Bucuresti'
}) */

/* database.ref().update({
    name: 'CyNEXX',
    age: 36
}).then(() => {
    database.ref('location/city').set('Bucuresti');
}).then(() => {
    database.ref('attributes').set({
        height: 181,
        weight: 72
    });
}).catch((error) => {
    console.log('Error: ', error);
}); */

/* database.ref().set('this is my data');*/

/* database.ref('age').set(36);
database.ref('location/city').set('Bucuresti');
database.ref('attributes').set({
    height: 181,
    weight: 72
}); */
