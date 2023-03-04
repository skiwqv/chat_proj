<template>
  <v-app>
  <v-container>
    <v-toolbar dense class="header">

      <v-toolbar-title class="header__button">
        <v-btn  class=" ml-3"
        :to="'/'"
        text
        >Home</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
        v-for="link of links"
        :key="link.title"
        :to="link.url"
        class=" ml-3"
        >{{link.title}}</v-btn>

        <v-btn
        v-if="isUserLoggedIn"
        @click="logOut"
        text
        >Log Out</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <router-view ></router-view>
    </v-container>
  </v-container>
</v-app>
</template>

<script>
import firebase from 'firebase';
import 'firebase/firestore'
  export default {
    data() {
      return {
        user:null,

    }
    },
    created() {
    this.$store.dispatch('initAuth')
    // this.$store.dispatch('updateUserAvatar')
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
         this.$store.dispatch('autoLoginUser', user)
       }
})

  },
    methods:{
      logOut(){
        this.$store.dispatch('logoutUser')
        this.$router.push('/')
      }
    },
    computed:{

      isUserLoggedIn() {
        return this.$store.getters.isUserLoggedIn
      },

      links() {
        if(this.isUserLoggedIn){
          return[
              {title:'Chat', url: '/chat'},
              {title:'about us', url: '/about'},
              {title:'profile', url:'/profile'}
          ]
        }else  {
          return[
              {title:'about us', url: '/about'},
              {title: 'Login', url:'/login'},
              {title:'Register', url: '/register'}
          ]
        }
      }
    }
  }
</script>

<style>
  .header{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .header__link {
    text-decoration: none;
    color: black;
  }
  .icon{
    width: 36px;
    height: 36spx;
}
</style>
