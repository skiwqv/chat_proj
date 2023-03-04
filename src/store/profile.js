import firebase from "firebase";
import 'firebase/storage'
import "firebase/firestore"

export default {

    state:{
        userId:null,
        user:null,
        photoURL: null
    },
    mutations: {
        setUserId: (state, userId) => {
          state.userId = userId
        },
        setUser: (state, user) => {
          state.user = user
        },
        updateAvatar(state,url){
            state.photoURL = url
        }
      },
      actions:{
        initAuth({commit}){

            firebase.auth().onAuthStateChanged(user =>{
                // console.log('User: ', user);
                if(user){
                    commit('setUserId', user.uid)
                    firebase.firestore().collection('profile').doc(user.uid).get()
                    .then(doc =>{
                        // console.log(doc.data());
                        if(doc.exists){
                            commit('setUser', doc.data())
                            commit('updateAvatar', doc.data().photoURL)
                        }else{
                            commit('setUserId', null)
                            commit('setUser',null)
                        }
                    })
                }
            })
        },

     async  updateUserAvatar({commit,state}, file){
         const imageExt = file.name.slice(file.name.lastIndexOf('.'))
         console.log('file: ', file, 'imageext:' , imageExt);
         console.log('id', state.userId);
         const fileData = await firebase.storage().ref(`avatar/${state.userId}`).put(file)
        //  const imageSrc = fileData.metadata.downloadURLs[0]
        const imageSrc = await fileData.ref.getDownloadURL()
         console.log('filedata', fileData, 'imagesrc', imageSrc);
         firebase.firestore().collection('profile').doc(state.userId).set({
                    ...state.user ,
                    photoURL: imageSrc
                })
                commit('updateAvatar', imageSrc)
            // firebase.auth().onAuthStateChanged(user=>{
                    // const storageRef =  firebase.storage().ref(`avatar/${user.uid}`).then((imageUser)=>{

                    // })

                    // storageRef.put(file).then(() =>{
                    //     console.log('REF: ',storageRef.getDownloadURL());
                    //     return storageRef.getDownloadURL()
                    // }).then(url =>{
                    //     firebase.firestore().collection('profile').doc(user.uid).set({
                    //         ...state.user ,
                    //         photoURL: url
                    //     })
                    //     commit('updateAvatar', url)
                    // })

                //  })
        }
      },
      getters:{
        getUserId:state =>{
            return state.userId
        },
        getUser:state =>{
            return state.user
        },
        getUserAvatar(state){
            return state.photoURL
        }
      }

}