<template>
    <v-app>
      <v-card
      max-width="1000"
      class="xs-12"
    >
      <v-toolbar
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Inbox</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-text-field
        v-model="search"
        color="white"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>


      </v-toolbar>
      <v-list>
        <v-list-item
          v-for="item in getUser"
          :key="item.email"
        >

          <v-list-item-content>
            <v-list-item-title v-text="item.email"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar>
            <v-img :src="item.photoURL"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-card>
    </v-app>
</template>

<script>

export default{
  data() {
    return {
      search:''
    };
  },
  computed:{
    getUser(){
      return this.$store.getters.getUsers
    }
  },
  methods:{
  },
  created(){
    this.$store.dispatch('fetchUsers')
    console.log('getUser:',this.getUser);
  }
}

</script>

<style>
    .icon{
        width: 36px;
        height: 36spx;
    }
</style>