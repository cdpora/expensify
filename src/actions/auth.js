import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    console.log('1-----> startLogout')
    return () => {
        console.log('2-----> startLogout')
        return firebase.auth().signOut()
    }
}