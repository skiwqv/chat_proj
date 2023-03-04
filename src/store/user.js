
import firebase from "firebase";
import "firebase/firestore"

class User {
    constructor(id,){
        this.id = id
    }
}


export default {
    state: {
        user: null,
        },
    mutations: {
        setUser (state,payload){
            state.user=payload
        },
    },
    actions: {
        async registUser({commit}, {email, password}){
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            firebase.firestore().collection('profile').doc(user.user.uid).set({
                id: user.user.uid,
                email:email,
                password: password
            })
            commit('setUser', new User(user.id))
        },
        async loginUser({commit}, {email, password}){
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            commit('setUser', new User(user.id))
        },
        autoLoginUser ({commit},payload) {
            commit('setUser', new User(payload.uid))
        },
        logoutUser ({commit}) {
            firebase.auth().signOut()
            commit('setUser', null)
        },
    },
    getters: {
        isUserLoggedIn (state) {
            return state.user !== null
        },
    }
}