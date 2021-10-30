<template>
  <div class="p-grid">
    <div class="p-col-12">
      <Card>
        <template #title>
          Menu Management
        </template>
        <template #content>
          <TreeTable
            class="p-treetable-sm"
            filterMode="strict"
            :value="nodes"
            :paginator="true"
            :rows="20" :filters="filtersNode"
          >
            <Column field="label" header="Label" :expander="true">
              <template #filter>
                <InputText type="text" v-model="filtersNode['label']" class="p-column-filter" placeholder="Filter by label" />
              </template>
            </Column>
            <Column field="to" header="Link">
              <template #filter>
                <InputText type="text" v-model="filtersNode['to']" class="p-column-filter" placeholder="Filter by link" />
              </template>
            </Column>
            <Column field="show_on_menu" header="Visibility">
              <template #filter>
                <InputText type="text" v-model="filtersNode['show_on_menu']" class="p-column-filter" placeholder="Filter by visibility" />
              </template>
            </Column>
            <Column headerStyle="width: auto" bodyStyle="text-align: center">
              <template #header>
                Action
              </template>
              <template #body="slotProps">
                <span class="p-buttonset">
                  <Button @click="onNodeAdd({ id: slotProps.node.data.id, label: slotProps.node.data.label, key: slotProps.node.key }, 'Add Child Menu')" type="button" class="p-button-success p-button-raised p-button-sm">
                    <span class="material-icons">add</span>
                  </Button>
                  <Button @click="onNodeEdit(slotProps.node, 'Edit Child Menu')" type="button" class="p-button-info p-button-raised p-button-sm">
                    <span class="material-icons">edit</span>
                  </Button>
                  <Button @click="onNodeDelete(slotProps.node.data.id)" type="button" class="p-button-danger p-button-raised p-button-sm">
                    <span class="material-icons">delete</span>
                  </Button>
                  <Button type="button" class="p-button-success p-button-raised p-button-sm">
                    <span class="material-icons">arrow_upward</span>
                  </Button>
                  <Button type="button" class="p-button-success p-button-raised p-button-sm">
                    <span class="material-icons">arrow_downward</span>
                  </Button>
                </span>
              </template>
            </Column>
          </TreeTable>
        </template>
      </Card>
      <Dialog :header="ui.modal.manageMenu.title" v-model:visible="ui.modal.manageMenu.state" :style="{width: '80vw'}" :modal="true" :position="ui.modal.manageMenu.position">
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-4">
            <label for="managelabel">Label</label>
            <InputText id="managelabel" type="text" v-model="form.txt_label" />
          </div>
          <div class="p-field p-col-12 p-md-8">
            <label for="manageroute">Route</label>
            <InputText id="manageroute" type="text" v-model="form.txt_route" />
          </div>
          <div class="p-field p-col-12 p-md-10">
            <label for="manageicon">Icon</label>
            <div class="p-inputgroup">
              <InputText id="manageicon" type="text" v-model="form.txt_icon" />
              <span class="p-inputgroup-addon">
                  <span class="material-icons-outlined">{{ form.txt_icon }}</span>
              </span>
            </div>
          </div>
          <div class="p-field p-col-12 p-md-2">
            <label for="managecheck">Show on Menu</label>
            <ToggleButton v-model="form.showMenu" onLabel="Show it!" offLabel="No, thanks" onIcon="pi pi-check" offIcon="pi pi-times" />
          </div>
        </div>
        <template #footer>
          <Button @click="toggleModal" class="p-button-text p-button-sm">
            <span class="material-icons">highlight_off</span> Cancel
          </Button>
          <Button class="p-button-sm" @click="processForm" autofocus>
            <span class="material-icons">task_alt</span> Submit
          </Button>
        </template>
      </Dialog>

      <Toast />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card'
import TreeTable from 'primevue/treetable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import ToggleButton from 'primevue/togglebutton'
import { mapActions, mapGetters } from 'vuex'
import CoreService from '@/service/core/menu'

export default defineComponent({
  name: 'Module',
  components: {
    Card, TreeTable, Column, Button, InputText, Dialog, ToggleButton, Toast
  },
  data () {
    return {
      formMode: 'add',
      form: {
        targetGroup: 0,
        targetID: 0,
        txt_label: '',
        txt_route: '',
        txt_icon: '',
        showMenu: false
      },
      ui: {
        modal: {
          manageMenu: {
            state: false,
            position: 'top',
            title: ''
          }
        }
      },
      selectedNode: {},
      filtersNode: {},
      expandedKeys: {},
      nodes: {
        data: []
      },
      columns: [
        { field: 'label', header: 'Label', expander: true },
        { field: 'to', header: 'To' },
        { field: 'icon', header: 'Icon' }
      ]
    }
  },
  mounted () {
    this.reloadMenu()
  },
  computed: {
    ...mapGetters({
      data: 'mCoreMenu/getData'
    })
  },
  methods: {
    ...mapActions({
      getMenu: 'mCoreMenu/get_all_menu',
      rebuildMenu: 'UPDATE_MENU'
    }),
    clearForm () {
      this.form = {
        targetGroup: 0,
        targetID: 0,
        txt_label: '',
        txt_route: '',
        txt_icon: '',
        showMenu: false
      }
    },
    reloadMenu () {
      this.getMenu().then((data: any) => {
        this.nodes = data.data.response_package.root
      })
    },
    toggleModal () {
      this.ui.modal.manageMenu.state = !this.ui.modal.manageMenu.state
    },
    onNodeDelete (target: Number) {
      return CoreService.menuDelete({
        request: 'menu',
        id: target
      }).then((response: any) => {
        response = response.data.response_package
        if (response.response_result > 0) {
          this.$toast.add({ severity: 'success', summary: 'Menu Manager', detail: response.response_message, life: 3000 })
          this.reloadMenu()
          this.rebuildMenu()
        }
      })
    },
    onNodeEdit (target:any, mode: string) {
      const data = target.data
      this.form.targetID = data.id
      this.form.txt_label = data.label
      this.form.txt_route = data.to
      this.form.txt_icon = data.icon
      this.form.showMenu = (target.show_on_menu === 'Y')
      this.formMode = 'edit'
      this.ui.modal.manageMenu.title = `${mode}  ${data.label}`
      this.toggleModal()
    },
    onNodeAdd (target:any, mode: string) {
      const checkLevel = target.key.split('-')
      this.formMode = 'add'
      if (checkLevel.length > 1) {
        this.form.targetGroup = checkLevel[0]
        this.form.targetID = target.id
      } else {
        this.form.targetID = 0
        this.form.targetGroup = target.id
      }

      this.ui.modal.manageMenu.title = `${mode}  ${target.label}`
      this.toggleModal()
    },
    editMenu () {
      const label = this.form.txt_label
      const routeTo = this.form.txt_route
      const icon = this.form.txt_icon
      const showMenu = (this.form.showMenu) ? 'Y' : 'N'

      return CoreService.menuEdit({
        request: 'update_menu',
        id: this.form.targetID,
        caption: label,
        grouper: this.form.targetGroup,
        targetLink: routeTo,
        remark: '',
        parent: this.form.targetID,
        icon: icon,
        showOnMenu: showMenu
      }).then((response: any) => {
        console.clear()
        console.log(response)
        response = response.data.response_package
        if (response.response_result > 0) {
          this.reloadMenu()
          this.rebuildMenu()
          this.clearForm()
          this.ui.modal.manageMenu.state = false
          this.$toast.add({ severity: 'success', summary: 'Menu Manager', detail: response.response_message, life: 3000 })
        }
      })
    },
    processForm () {
      if (this.formMode === 'add') {
        this.addMenu()
      } else {
        this.editMenu()
      }
    },
    addMenu () {
      const label = this.form.txt_label
      const routeTo = this.form.txt_route
      const icon = this.form.txt_icon
      const showMenu = (this.form.showMenu) ? 'Y' : 'N'

      return CoreService.menuAdd({
        request: 'add_menu',
        caption: label,
        grouper: this.form.targetGroup,
        targetLink: routeTo,
        remark: '',
        parent: this.form.targetID,
        icon: icon,
        showOnMenu: showMenu
      }).then((response: any) => {
        response = response.data.response_package
        if (response.response_result > 0) {
          this.reloadMenu()
          this.rebuildMenu()
          this.clearForm()
          this.ui.modal.manageMenu.state = false
          this.$toast.add({ severity: 'success', summary: 'Menu Manager', detail: response.response_message, life: 3000 })
        }
      })
    }
  }
})
</script>
