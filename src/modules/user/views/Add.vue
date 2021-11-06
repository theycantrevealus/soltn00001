<template>
  <div>
    <Card class="card-fluid">
      <template #content>
        <TabView class="tabview-custom" ref="tabview4">
          <TabPanel>
              <template #header>
                  <span class="material-icons-outlined">account_circle</span>
                  <span>Basic Information</span>
              </template>
              <div class="p-fluid p-formgrid p-grid">
                <div class="p-field p-col-12 p-md-4">
                  <label for="userFormEmail">Email</label>
                  <InputText placeholder="example@domain.com" id="userFormEmail" type="text" v-model.trim="$v.email.$model" />
                  <Message severity="error" v-if="$v.email.$errors.length > 0" :closable="false">
                    <div class="error-msg" v-for="(error, index) of $v.email.$errors" :key="index">{{ error.$message }}</div>
                  </Message>
                </div>
                <div class="p-field p-col-12 p-md-4">
                  <label for="userFormFirstName">Firstname</label>
                  <InputText placeholder="Jhonny" id="userFormFirstName" type="text" v-model.trim="$v.first_name.$model" />
                  <Message severity="error" v-if="$v.first_name.$errors.length > 0" :closable="false">
                    <div class="error-msg" v-for="(error, index) of $v.first_name.$errors" :key="index">{{ error.$message }}</div>
                  </Message>
                </div>
                <div class="p-field p-col-12 p-md-4">
                  <label for="userFormLastName">Lastname</label>
                  <InputText placeholder="Sins" id="userFormLastName" type="text" v-model.trim="$v.last_name.$model" />
                  <Message severity="error" v-if="$v.last_name.$errors.length > 0" :closable="false">
                    <div class="error-msg" v-for="(error, index) of $v.last_name.$errors" :key="index">{{ error.$message }}</div>
                  </Message>
                </div>
                <div class="p-field p-col-12">
                  <label for="userFormAddress">Address</label>
                  <Textarea id="userFormAddress" placeholder="4th Avenue" rows="4" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                  <label for="userFormContact">Contact</label>
                  <InputText id="userFormContact" placeholder="000-00000" type="text" />
                </div>
              </div>
          </TabPanel>
          <TabPanel>
              <template #header>
                <span class="material-icons-outlined">vpn_key</span>
                  <span>Role and Permission</span>
              </template>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
          </TabPanel>
        </TabView>
      </template>
      <template #footer>
        <Toolbar>
          <template #left>
            <Button label="Cancel" icon="pi pi-angle-left" class="p-button-danger p-button-rounded" />
          </template>

          <template #right>
            <Button label="Save" :disabled="$v.$invalid" icon="pi pi-save" class="p-mr-2 p-button-success p-button-rounded" />
          </template>
        </Toolbar>
      </template>
    </Card>
  </div>
</template>
<script>
import Card from 'primevue/card'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Message from 'primevue/message'

import { validateEmail, validateName } from '@/util/string'
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
  name: 'UserAdd',
  components: {
    Card, Toolbar, Button, InputText, Textarea, TabView, TabPanel, Message
  },
  setup () {
    return { $v: useVuelidate() }
  },
  data () {
    return {
      email: '',
      first_name: '',
      last_name: '',
      address: '',
      contact: '',
      response: {
        type: 'errors',
        message: ''
      }
    }
  },
  validations: {
    email: {
      required,
      name_validation: {
        $validator: validateEmail,
        $message: 'Invalid Email Format'
      },
      minLength: minLength(4)
    },
    first_name: {
      required,
      name_validation: {
        $validator: validateName,
        $message: 'Invalid Name Format'
      },
      minLength: minLength(4)
    },
    last_name: {
      required,
      name_validation: {
        $validator: validateName,
        $message: 'Invalid Name Format'
      },
      minLength: minLength(4)
    }
  }
}
</script>
