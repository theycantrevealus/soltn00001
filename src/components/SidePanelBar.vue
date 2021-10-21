<template>
  <h5>Menu</h5>
  <PanelMenu :model="sidemenu1" />
  <hr />
  <h5>Setting</h5>
  <PanelMenu :model="sidemenu2" />
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
      sidemenu1: [
        {
          label: 'Home',
          icon: 'pi pi-home pi-external-link',
          to: '/home'
        },
        {
          label: 'About',
          icon: 'pi pi-info-circle pi-external-link',
          to: '/about'
        }
      ],
      sidemenu2: [
        {
          label: 'Account',
          icon: 'pi pi-users pi-file',
          items: [
            {
              label: 'Account',
              icon: 'pi pi-fw pi-user'
            },
            {
              label: 'Authority',
              icon: 'pi pi-fw pi-lock-open'
            }
          ]
        }
      ]
    }
  }
}
</script>
