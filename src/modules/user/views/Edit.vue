<template>
  <div>
    <form autocomplete="off" @submit.prevent="editUser">
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
                    <Textarea v-model.trim="$v.address.$model" id="userFormAddress" placeholder="4th Avenue" rows="4" />
                  </div>
                  <div class="p-field p-col-12 p-md-6">
                    <label for="userFormContact">Contact</label>
                    <InputText v-model.trim="$v.contact.$model" id="userFormContact" placeholder="000-00000" type="text" />
                  </div>
                </div>
            </TabPanel>
            <TabPanel>
                <template #header>
                  <span class="material-icons-outlined">vpn_key</span>
                    <span>Role and Permission</span>
                </template>
                <PickList v-model="menuList" dataKey="id" @move-all-to-target="moveAllItemGranted" @move-all-to-source="removeAllItemGranted" @move-to-target="moveGranted($event)" @move-to-source="removeGranted($event)" >
                  <template #sourceHeader>
                    Roles
                  </template>
                  <template #targetHeader>
                    Granted
                  </template>
                  <template #item="slotProps">
                    <div class="role-container">
                      <div class="p-grid">
                        <div class="p-col-6">
                          <Chip>
                            <span class="material-icons-outlined">{{ slotProps.item.icon }}</span><strong>{{ slotProps.item.label }}</strong>
                          </Chip>
                        </div>
                        <div class="p-col-2">
                          <div class="p-field-checkbox" v-if="!checkedPerm[`delete_perm_${slotProps.item.id}`].disabled">
                            <Checkbox :id="`delete_perm_${ slotProps.item.id }`" :disabled="checkedPerm[`delete_perm_${slotProps.item.id}`].disabled" :binary="checkedPerm[`delete_perm_${slotProps.item.id}`].checked" v-model="grantedItem[`menu_${slotProps.item.id}`].delete" />
                            <label :for="`delete_perm_${ slotProps.item.id }`">
                              <span class="material-icons-outlined">delete</span>
                            </label>
                          </div>
                        </div>
                        <div class="p-col-2">
                          <div class="p-field-checkbox" v-if="!checkedPerm[`edit_perm_${slotProps.item.id}`].disabled">
                            <Checkbox :id="`edit_perm_${ slotProps.item.id }`" :disabled="checkedPerm[`edit_perm_${slotProps.item.id}`].disabled" :binary="checkedPerm[`edit_perm_${slotProps.item.id}`].checked" v-model="grantedItem[`menu_${slotProps.item.id}`].edit" />
                            <label :for="`edit_perm_${ slotProps.item.id }`">
                              <span class="material-icons-outlined">edit</span>
                            </label>
                          </div>
                        </div>
                        <div class="p-col-2">
                          <div class="p-field-checkbox" v-if="!checkedPerm[`add_perm_${slotProps.item.id}`].disabled">
                            <Checkbox :id="`add_perm_${ slotProps.item.id }`" :disabled="checkedPerm[`add_perm_${slotProps.item.id}`].disabled" :binary="checkedPerm[`add_perm_${slotProps.item.id}`].checked" v-model="grantedItem[`menu_${slotProps.item.id}`].add" />
                            <label :for="`add_perm_${ slotProps.item.id }`">
                              <span class="material-icons-outlined">add</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </PickList>
            </TabPanel>
          </TabView>
        </template>
        <template #footer>
          <Toolbar>
            <template #left>
              <Button id="userFormSubmit" label="Cancel" icon="pi pi-angle-left" class="p-button-danger p-button-rounded" @click="backToUser" />
            </template>

            <template #right>
              <Button label="Save" type="submit" :disabled="$v.$invalid" icon="pi pi-save" class="p-mr-2 p-button-success p-button-rounded" />
            </template>
          </Toolbar>
        </template>
      </Card>
    </form>
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
import Chip from 'primevue/chip'
import PickList from 'primevue/picklist'
import Checkbox from 'primevue/checkbox'

import { validateEmail, validateName } from '@/util/string'
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import UserService from '@/modules/user/service'

export default {
  name: 'UserEdit',
  components: {
    Card, Toolbar, Button, InputText, Textarea, TabView, TabPanel, Message, PickList, Chip, Checkbox
  },
  setup () {
    return { $v: useVuelidate() }
  },
  data () {
    return {
      grantedItem: {},
      menuList: [],
      checkedPerm: {},
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
    },
    address: {},
    contact: {}
  },
  mounted () {
    UserService.getDetail(this.$route.params.uid).then((response) => {
      this.email = response.email
      this.first_name = response.first_name
      this.last_name = response.last_name
      this.address = response.address
      this.contact = response.contact

      this.menuList = [response.ungranted, response.granted]
      for (const a in response.ungranted) {
        this.checkPerm(`delete_perm_${response.ungranted[a].id}`)
        this.checkPerm(`edit_perm_${response.ungranted[a].id}`)
        this.checkPerm(`add_perm_${response.ungranted[a].id}`)
      }

      const roleGranted = response.rolenperm
      for (const z in roleGranted) {
        const targetMenu = roleGranted[z].menu
        const roleLib = roleGranted[z].role
        if (this.grantedItem[`menu_${targetMenu}`] === undefined) {
          this.grantedItem[`menu_${targetMenu}`] = {
            add: false,
            edit: false,
            delete: false
          }
        }

        for (const y in roleLib) {
          this.checkedPerm[`${y}_perm_${targetMenu}`] = {
            value: true,
            disabled: false,
            checked: true
          }
          this.grantedItem[`menu_${targetMenu}`][y] = roleLib[y]
        }
      }
    })
  },
  methods: {
    backToUser () {
      this.$router.push('/user/list')
    },
    checkPerm (target, setter = false, dis = false) {
      if (this.checkedPerm[target] === undefined) {
        this.checkedPerm[target] = {
          value: false,
          disabled: true,
          checked: true
        }
      } else {
        this.checkedPerm[target] = {
          value: setter,
          disabled: dis,
          checked: true
        }
      }
    },
    moveAllItemGranted () {
      for (var a in this.checkedPerm) {
        this.checkedPerm[a].disabled = false
        let id = a.split('_')
        id = id[id.length - 1]
        if (this.grantedItem[`menu_${id}`] === undefined) {
          this.grantedItem[`menu_${id}`] = {
            delete: false,
            edit: false,
            add: false
          }
        }
      }
      // console.clear()
      // console.log(JSON.stringify(this.grantedItem))
    },
    removeAllItemGranted () {
      for (var a in this.checkedPerm) {
        this.checkedPerm[a].disabled = true
        let id = a.split('_')
        id = id[id.length - 1]
        delete this.grantedItem[`menu_${id}`]
      }
    },
    moveGranted (event) {
      const selectedData = event.items[0]
      this.checkedPerm[`add_perm_${selectedData.id}`].disabled = false
      this.checkedPerm[`edit_perm_${selectedData.id}`].disabled = false
      this.checkedPerm[`delete_perm_${selectedData.id}`].disabled = false

      if (this.grantedItem[`menu_${selectedData.id}`] === undefined) {
        this.grantedItem[`menu_${selectedData.id}`] = {
          delete: false,
          edit: false,
          add: false
        }
      }
      this.grantedItem[`menu_${selectedData.id}`] = {
        delete: false,
        edit: false,
        add: false
      }
    },
    removeGranted (event) {
      const selectedData = event.items[0]
      this.checkedPerm[`add_perm_${selectedData.id}`].disabled = true
      this.checkedPerm[`edit_perm_${selectedData.id}`].disabled = true
      this.checkedPerm[`delete_perm_${selectedData.id}`].disabled = true

      delete this.grantedItem[`menu_${selectedData.id}`]
    },
    editUser () {
      console.clear()
      console.log('Edit')
      UserService.editUser({
        request: 'edit_user',
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        contact: this.contact,
        rolenperm: this.grantedItem,
        uid: this.$route.params.uid
      }).then((response) => {
        console.log(response)
        var result = response.data.response_package.response_result
        if (result > 0) {
          this.$router.push('/user/list')
        }
      })
    }
  }
}
</script>
