<template>
        <v-container>
            <v-form
            ref="form"
            v-model="valid"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
              type="password"
            ></v-text-field>
            <v-btn
            :disabled="!valid"
            color="#1B5E20"
            class="mr-4"
            @click="login"
          >
           Login
          </v-btn>
            </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                valid:true,
                email:'',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                  ],
                password:'',
                passwordRules:[v => !!v || 'Password is required'],
            };
        },
        methods:{
          login () {
            const user = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('loginUser', user)
            .then(()=>{
              this.$router.push('/chat')
            })
          }
        }
    }
</script>

<style>

</style>