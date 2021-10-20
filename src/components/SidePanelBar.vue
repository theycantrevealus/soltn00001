<template>
  <PanelMenu :model="sidemenu" />
</template>
<script>
import PanelMenu from 'primevue/panelmenu'

import { mapActions } from 'vuex'
export default {
  name: 'SidePanelMenu',
  components: {
    PanelMenu
  },
  methods: {
    ...mapActions({
      sLogout: 'LOGOUT'
    }),
    logout () {
      this.sLogout().then(() => {
        this.$router.push('/login')
      })
    }
  },
  data () {
    return {
      sidemenu: [
        {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [
                {
                  label: 'Bookmark',
                  icon: 'pi pi-fw pi-bookmark'
                },
                {
                  label: 'Video',
                  icon: 'pi pi-fw pi-video'
                }

              ]
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            },
            {
              separator: true
            },
            {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link'
            }
          ]
        }
      ]
    }
  }
}
</script>
