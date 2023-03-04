import firebase from "firebase";
import 'firebase/storage'
import "firebase/firestore"

export default{
    state:{
        data: []
    },
    mutations:{
        setUsers(state, data){
            state.data = data
        }
    },
    actions:{
    async fetchUsers({commit}){
            const data = []
            const querySnapshot = await firebase.firestore().collection("profile").get()
             querySnapshot.forEach((doc) =>{
                data.push(doc.data())
            })
            commit('setUsers', data)







        // await  firebase.firestore().collection("profile").get().then((querySnapshot)=>{
        //     if(querySnapshot.empty){
        //         console.log('da ebat ego v rot');
        //     }else{
        //         const data = []
        //         querySnapshot.forEach((doc)=>{
        //             data.push(doc.data())
        //         })
        //         commit('setUsers', data)
                // console.log('data: ' , data)
        //     }
        //  })


        //  .then((querySnapshot)=>{
        //     querySnapshot.forEach((doc)=>{
        //         const data = doc.data()
        //         console.log('data', data);
        //     })
        //   })
        }
    },
    getters:{
        getUsers(state){
            return state.data
        }
    }
}