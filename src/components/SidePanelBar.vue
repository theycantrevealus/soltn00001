<template>
  <div class="sidepanel-container">
    <div class="layout-menu-container">
      <SideMenuAutoGen :items="sidemenu3" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
    </div>
  </div>
</template>
<script>
import SideMenuAutoGen from './SideMenuAutoGen'

import { mapActions } from 'vuex'
export default {
  name: 'SidePanelMenu',
  components: {
    SideMenuAutoGen
  },
  props: {
    model: Array
  },
  methods: {
    ...mapActions({
      sLogout: 'LOGOUT'
    }),
    logout () {
      this.sLogout().then(() => {
        this.$router.push('/login')
      })
    },
    onMenuItemClick (event) {
      this.$emit('menuitem-click', event)
    }
  },
  data () {
    return {
      sidemenu3: [
        {
          label: 'Home',
          items: [{
            label: 'Dashboard', icon: 'home', to: '/dashboard'
          }, {
            label: 'About', icon: 'info', to: '/about'
          }]
        },
        {
          label: 'Master Data',
          items: [
            { label: 'Form Layout', icon: 'api', to: '/form' },
            { label: 'Message', icon: 'api', to: '/message' }
          ]
        },
        {
          label: 'Setting',
          items: [
            {
              label: 'Module',
              icon: 'view_in_ar',
              to: '/core/menu'
            },
            {
              label: 'Module',
              icon: 'settings',
              items: [
                {
                  label: 'Submenu 1.1',
                  icon: 'api',
                  items: [
                    { label: 'Submenu 1.1.1', icon: 'api' },
                    { label: 'Submenu 1.1.2', icon: 'api' },
                    { label: 'Submenu 1.1.3', icon: 'api' }
                  ]
                },
                {
                  label: 'Submenu 1.2',
                  icon: 'api',
                  items: [
                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'Get Started',
          items: [
            {
              label: 'Documentation',
              icon: 'help_outline'
            },
            {
              label: 'Source',
              icon: 'code'
            }
          ]
        }
      ]
    }
  }
}
</script>
