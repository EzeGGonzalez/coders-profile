import * as firebase from 'firebase'
import {config} from '../helpers/firebaseConfig'

const firebaseApp = firebase.initializeApp(config)

export const auth = firebaseApp.auth()
export const db = firebaseApp.database()
export const PROVIDER = new firebase.auth.GoogleAuthProvider()

const authUser = () => {
  return new Promise((resolve, reject) => {
    auth
      .onAuthStateChanged(user => resolve(user), error => console.log(error))
  })
}

export default { authUser, firebaseApp }
