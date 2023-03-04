<template>
    <v-app>
        <v-card class="mx-auto" max-width="1000" tile>
            <v-img height="200" src="https://images.pexels.com/photos/6985260/pexels-photo-6985260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></v-img>
            <v-row style="margin:2.5%;position:absolute; top: 130px">

                        <v-list-item>
                         <v-list-item-avatar size="100">
                            <img
                            :src="photo"
                            alt="User Avatar"
                            >
                          </v-list-item-avatar>
                          <v-list-item-content>
                              <v-list-item-title
                              v-if="user"
                              class="title" style="margin-top:20px;">{{user.email}}</v-list-item-title>
                              <v-list-item-subtitle></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-btn
                        class="primary mt-3"
                        @click="triggerUpload"
                        >Change avatar</v-btn>
                        <input ref="fileInput" type="file" style="display:none;" accept="image/*" @change="onFileChange">
          </v-row>
        </v-card>
    </v-app>
</template>


<script>
   export default{
    computed:{
        user(){
            return this.$store.getters.getUser
        },
        photo(){
           return this.$store.getters.getUserAvatar
        }
    },
    methods:{
        triggerUpload () {
                this.$refs.fileInput.click()
            },
        onFileChange(event){
        const file = event.target.files[0]
         this.$store.dispatch('updateUserAvatar', file)
        }
    },
   }

</script>

<style scoped>

</style>