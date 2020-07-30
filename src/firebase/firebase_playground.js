import * as firebase from 'firebase';
import moment from 'moment';

var firebaseConfig = {
    apiKey: "AIzaSyBVDIT0NNW_dLosfqrInL7mQ5OGbx4WGQU",
    authDomain: "expensify-app-27ea1.firebaseapp.com",
    databaseURL: "https://expensify-app-27ea1.firebaseio.com",
    projectId: "expensify-app-27ea1",
    storageBucket: "expensify-app-27ea1.appspot.com",
    messagingSenderId: "722100257789",
    appId: "1:722100257789:web:5da71b337e7b5c9d744f94",
    measurementId: "G-GEVE06ZH9T"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

// --------------------------------------------------------------------

// create

// set data into firebase using string
// database.ref().set('This is my data.');

// set data into firebase using object
// database.ref().set({
//     name: 'LopsidedAxis',
//     age: 19,
//     isSingle: false,
//     location: {
//         city: 'Phnom Penh',
//         country: 'Cambodia'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((error) => {
//     console.log(error)
// });

// --------------------------------------------------------------------

// update

// update value of age
// database.ref('age').set({
//     age: 20,
// });

// update value of object
// database.ref('location/city').set('Kompong Cham Province');

// update by adding more attributes
// database.ref('attributes').set({
//     height: 1.70,
//     weight: 80
// }).then(() => {
//     console.log('data is saved')
// }).catch((error) => {
//     console.log(error)
// });

// database.ref().update({
//     name: 'Tang Seakmeng',
//     age: 20,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Slash Foundry'
//     },
//     isSingle: null, 
//     // location: { city: 'kompong cham' }
//     'location/city': 'phnom penh'
// });

// --------------------------------------------------------------------

// delete

// delete attribute
// database.ref('isSingle').set(null);

// delete attribute
// database.ref('isSingle').remove().then(() => {
//     console.log('data is removed')
// }).catch((error) => {
//     console.log(error)
// });

// --------------------------------------------------------------------

// fetch firebase

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const value = snapshot.val();
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log('Error: ' + e);
//   });

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const value = snapshot.val();
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log('Error: ' + e);
//   });

// const onValueChanged = database.ref().on('value', (snapshot) => {
//   const value = snapshot.val();
//   console.log(value)
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`)
// }, (e) => {
//   console.log('Error with data fetching: ' + e)
// });

// setTimeout(() => {
//   database.ref('age').set(19);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChanged);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(28);
// }, 10500);

// --------------------------------------------------------------------

// const notes = [{
//   id: '1',
//   title: 'first title',
//   body: 'first body'
// }, {
//   id: '2',
//   title: 'second title',
//   body: 'second body'
// },{
//   id: '3',
//   title: 'third title',
//   body: 'third body'
// }];

// database.ref().set(null); // clear database
// database.ref('notes').set(notes);

// database.ref('expenses').set(null);

// database.ref('expenses').push({
//   description: 'description 1',
//   note: 'note 1',
//   amount: '10',
//   createdAt: `${moment().valueOf()}`
// });

// database.ref('expenses').push({
//   description: 'description 2',
//   note: 'note 2',
//   amount: '20',
//   createdAt: `${moment().valueOf()}`
// });

// --------------------------------------------------------------------

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const value = snapshot.val();
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log('Error: ' + e);
//   });

database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({ 
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })
    console.log(expenses)
  })
.catch((e) => {
  console.log('Error: ' + e);
});

database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({ 
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
}, (e) => {
  console.log('Error with data fetching: ' + e)
});

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(`Child Removed: ${snapshot.key}: ${snapshot.val()}`);
})

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(`Child Changed: ${snapshot.key}: ${snapshot.val()}`);
})

database.ref('expenses').on('child_add', (snapshot) => {
  console.log(`Child Added: ${snapshot.key}: ${snapshot.val()}`);
})