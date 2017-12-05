//import * as firebase from 'firebase'
const firebase = require('firebase');
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  // const config = {
  //   apiKey: "AIzaSyB7E6WZ6aPutYhqYx3-mUGaOAmoJn9xX3Y",
  //   authDomain: "expensify-7a389.firebaseapp.com",
  //   databaseURL: "https://expensify-7a389.firebaseio.com",
  //   projectId: "expensify-7a389",
  //   storageBucket: "expensify-7a389.appspot.com",
  //   messagingSenderId: "461318653259"
  // };

  firebase.initializeApp(config)

  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {firebase,googleAuthProvider, database as default} 


  // database.ref -> is a reference to the root of the DB
//   database.ref().set({
//       name: 'Asca Arop',
//       isSingle: true,
//       stresLevel: 6,
//       job: {
//           title: 'Teacher',
//           school: 'Stupid Assholes'
//       },
//       location: {
//           city: 'San Jose',
//           state: 'California',
//           country: 'USA'
//       },
//       sex: 'F',
//       age: '33'
//   }).then(()=>{
//       console.log('Data is saved')
//   }).catch((e)=>{
//       console.log('This failed.',e)
//   })
  // set takes any data and wipes out the previous reference
  //database.ref().set('This is my data.')
  //database.ref().set({
  //    age:40
  //})
  //database.ref('age').set(47)
//   database.ref('location/city').set('Cisco')

//   database.ref('attributes/height').set(6.0)
//   database.ref('attributes/weight').set(249)

//   database.ref('skil4ls').set({
//       driver:'C',
//       painter: 'oil'
//   })

//   database.ref('vacation').set({
//     driver:'august',
//     painter: 'january'
// })

// console.log("I made a 2nd request to change the database")

// database.ref('attributes').set({
//     height: 179,
//     weight: 210
// }).then(()=>{
//     console.log('2nd then')
// }).catch((e)=>{
//     console.log('2nd failed -> ',e)
// })

// database.ref('isSingle')
//         .remove()
//         .then(()=>{
//             console.log('Remove success')
//         })
//         .catch((e)=>{
//             console.log('Remove failed')
//         })
// database.ref().update({
//     'job/title': 'Software Developer',
//     'job/company':'Amazon',
//     'job/school':null,
//     'location/city': 'Seattle'
// })

// database.ref().once('value')
//               .then((snapshot)=> {
//                 const val = snapshot.val()
//                 console.log('val=',val)
//               })
//               .catch((e)=>{
//                 console.log('Error fetching data', e)
//               })

// to be notified by the server of changes
// this will run continuosly, don't need promises, use callback
// returns the callback which we can save to reuse it for the .off case
// const onValueChange = database.ref()
//         .on('value', (snapshot) => {
//             console.log(snapshot.val())
//         }, (e) => {
//             console.log('Error with data fetching', e)
//         })

// setTimeout(()=>{
//     database.ref('age').set(31)
// }, 3500)

// setTimeout(()=>{
//     database.ref().off('value', onValueChange)
// }, 7500)

// setTimeout(()=>{
//     database.ref('age').set(40)
// }, 10500)

// database.ref().once('value')
//               .then((snapshot)=> {
//                 const val = snapshot.val()
//                 const name = val.name
//                 const title = val.job.title
//                 const company = val.job.companyk
//                 console.log(name + ' is a '+ title + ' at '+company)
//               })
//               .catch((e)=>{
//                 console.log('Error fetching data', e)
//               })

// database.ref()
//         .on('value', (snapshot) => {
//             const val = snapshot.val()
//             const name = val.name
//             const title = val.job.title
//             const company = val.job.company
//             console.log(name + ' is a '+ title + ' at '+company)
//             console.log(`${name} is a ${title} at ${company}`)
//         }, (e) => {
//             console.log('Error with data fetching', e)
//         })


// const firebaseNotes = {
//     notes: { 
//         x1: {
//             title: 'First note',
//             body:'This is my 1st note'
//         },
//         x2: {
//             title: 'Second note',
//             body:'This is my 2nd note'
//         }
//     }
// }


// database.ref('firebaseNotes').set(firebaseNotes)



// database.ref('notes/-L-IzqB7nJsSXFaKOmaN').update({
//     body: 'Buy food'
// })

// const dt1 = database.ref('expenses').push({
//     description: '1st note',
//     note:'This is my 1st note',
//     amount:23,
//     createdAt:24323
// })
// const dt2 = database.ref('expenses').push({
//     description: 'Second note',
//     note:'This is my 2nd note',
//     amount:123,
//     createdAt:24323
// })
// const dt3= database.ref('expenses').push({
//     description: '3rd note',
//     note:'This is my 3rd note',
//     amount:233,
//     createdAt:24323
// })

// console.log('dt1',dt1)
// console.log('dt2',dt2)
// console.log('dt3',dt3)

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = []
//       snapshot.forEach((child)=> {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//       })
//       console.log(expenses)
//   })

  // database
  //   .ref('expenses')
  //   .on('value', (snapshot) => {
  //       const val = snapshot.val()
  //       console.log('val-',val)
  //   }, (e) => {
  //       console.log('Error with data fetching', e)
  //   })