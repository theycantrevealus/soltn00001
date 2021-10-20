<template>
  <div class="p-grid">
    <div class="p-col-4 p-offset-4">
      <form autocomplete="off" @submit.prevent="submitLogin">
        <Card>
          <template #header>
            <h1 style="padding: 20px">Login</h1>
          </template>
          <template #content>
            <div class="p-fluid">
              <div class="p-field">
                <label for="loginEmail">Email</label>
                <InputText autocomplete="off" id="loginEmail" v-model.trim="$v.name.$model" />
                <Message class="input-errors" v-if="$v.name.$errors.length > 0" :closable="false">
                  <div class="error-msg" v-for="(error, index) of $v.name.$errors" :key="index">{{ error.$message }}</div>
                </Message>
              </div>
              <div class="p-field">
                <label for="loginPassword">Password</label>
                <Password type="password" id="loginPassword" placeholder="Password" v-model="$v.password.$model" />
                <Message class="input-errors" v-if="$v.password.$errors.length > 0" :closable="false">
                  <div class="error-msg" v-for="(error, index) of $v.password.$errors" :key="index">{{ error.$message }}</div>
                </Message>
              </div>
            </div>
          </template>
          <template #footer>
            <Button type="submit" label="Login" icon="pi pi-check" :disabled="$v.$invalid" />
          </template>
        </Card>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/util/string'
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Message from 'primevue/message'
export default {
  name: 'Login',
  components: {
    Card, InputText, Password, Button, Message
  },
  mounted () {
    console.log(this.$store.state.mAccount.credential.isAuth)
  },
  setup () {
    return { $v: useVuelidate() }
  },
  data () {
    return {
      name: '',
      password: ''
    }
  },
  validations: {
    name: {
      required,
      name_validation: {
        $validator: validateEmail,
        $message: 'Invalid Email Format'
      },
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    submitLogin: function () {
      console.log('Log In')
    }
  }
}
</script>
