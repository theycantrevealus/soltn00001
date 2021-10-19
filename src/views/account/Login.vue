<template>
  <div class="grid">
    <div class="col-4"></div>
    <div class="col-4">
      <form @submit.prevent="actionLogin">
        <div class="card">
          <h5>Login</h5>
          <p>Use this page to start from scratch and place your custom content.</p>
          <div class="grid">
            <div class="col-12">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <InputText placeholder="Email" v-model="this.v$.for" />
              </div>
              <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="col-12">
              <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                  <i class="pi pi-key"></i>
              </span>
                <Password placeholder="Password" v-model="v$.form.password.$model" />
              </div>
              <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="col-12">
              <div class="p-grid p-jc-center">
                <div class="p-col-12">
                </div>
                <div class="p-col-6">
                  <Button type="submit" :disabled="v$.form.$invalid" label="Login" class="p-button-raised" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

export default {
  name: 'Login',
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  mounted () {
    console.log(this.v$.form.$invalid)
  },
  data () {
    return {
      login_message: '',
      login_severity: '',
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations () {
    return {
      form: {
        email: { required },
        password: { required, min: minLength(6) }
      }
    }
  },
  components: {
    InputText, Button, Password
  },
  methods: {
    actionLogin () {
      this.v$.$touch()

      /* this.$store.dispatch('account/login', this.form).then(
        response => {
          if (response.response_result > 0) {
            this.login_severity = 'success'
            this.$router.push('/')
          } else {
            this.login_severity = 'error'
          }

          this.login_message = response.response_message
        }
      ) */
    }
  }
}
</script>
