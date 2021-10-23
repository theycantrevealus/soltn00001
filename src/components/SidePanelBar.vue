<template>
  <div>
    <div class="layout-menu-container">
      <SideMenuAutoGen :items="sidemenu3" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
    </div>
  </div>
</template>
<script>
import PanelMenu from 'primevue/panelmenu'
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
              icon: 'pi pi-fw pi-user',
              to: '/home',
              style: ''
            },
            {
              label: 'Authority',
              icon: 'pi pi-fw pi-lock-open',
              to: '/about',
              style: ''
            }
          ]
        }
      ],
      sidemenu3: [
        {
          label: 'Home',
          items: [{
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
          }, {
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
          }, {
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
          }, {
            label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
          }]
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-fw pi-sitemap',
          items: [
            { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
            { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
            { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
            { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' }
          ]
        },
        {
          label: 'Menu Hierarchy',
          icon: 'pi pi-fw pi-search',
          items: [
            {
              label: 'Submenu 1',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                {
                  label: 'Submenu 1.1',
                  icon: 'pi pi-fw pi-bookmark',
                  items: [
                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                  ]
                },
                {
                  label: 'Submenu 1.2',
                  icon: 'pi pi-fw pi-bookmark',
                  items: [
                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
                  ]
                }
              ]
            },
            {
              label: 'Submenu 2',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                {
                  label: 'Submenu 2.1',
                  icon: 'pi pi-fw pi-bookmark',
                  items: [
                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' }
                  ]
                },
                {
                  label: 'Submenu 2.2',
                  icon: 'pi pi-fw pi-bookmark',
                  items: [
                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'Get Started',
          items: [
            { label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => { window.location = '#/documentation' } },
            { label: 'View Source', icon: 'pi pi-fw pi-search', command: () => { window.location = 'https://github.com/primefaces/sakai-vue' } }
          ]
        }
      ]
    }
  }
}
</script>
