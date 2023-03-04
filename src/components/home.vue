<template>

 <v-app class="main">
    <v-parallax class="main__image"
    src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?w=1060&t=st=1676973606~exp=1676974206~hmac=58923b173c132bce6ba41f62cbf807149c731ee02b187e29083717cb5919c7e3"

  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          Chat!
        </h1>
        <v-btn
        height="50px"
        width="300px"
        @click="toRegister"
        >Begin work!</v-btn>
      </v-col>
    </v-row>
  </v-parallax>
 </v-app>
</template>

<script>
    export default {
      computed:{
      },
      methods:{
         toRegister() {
                this.$router.push('/register')
            }
      }
    }
</script>

<style scoped>
    .main{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

</style>