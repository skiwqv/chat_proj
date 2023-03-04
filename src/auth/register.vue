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

        <v-text-field
          v-model="confirmPassword"
          :rules="confirmPasswordRules"
          label=" Confirm Password"
          required
          type="password"
        ></v-text-field>


        <v-btn
          :disabled="!valid"
          color="#1B5E20"
          class="mr-4"
          @click="register"
        >
          Create account!
        </v-btn>

      </v-form>
    </v-container>
</template>

<script>

    export default {
        data() {
            return {
                email:'',
                password:'',
                confirmPassword:'',
                valid:true,
                  emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                  ],
                  passwordRules:[v => !!v || 'Password is required'],
                  confirmPasswordRules:[v => !!v || 'Password is required',v =>v===this.password || 'Password must match  '],
            };
        },
        methods:{
            register() {
              const user = {
                email: this.email,
                password: this.password,
              }
              this.$store.dispatch('registUser', user)
              .then(()=>{
                this.$router.push('/chat')
              })
            }
        }
    }
</script>

<style>

</style>