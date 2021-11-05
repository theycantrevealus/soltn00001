<template>
  <div>
    <Card class="card-fluid">
      <template #header>
        <Toolbar>
          <template #left>
            <Button label="Back" @click="backToUser" icon="pi pi-angle-left" class="p-mr-2 p-button-rounded p-button-danger" />
          </template>

          <template #right>
            <Button label="Reload" icon="pi pi-replay" class="p-button-success p-button-rounded" />
          </template>
        </Toolbar>
      </template>
      <template #content>
        asd
      </template>
    </Card>
  </div>
</template>
<script>
import Card from 'primevue/card'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
export default {
  name: 'UserEdit',
  components: {
    Card, Button, Toolbar
  },
  methods: {
    backToUser () {
      this.$router.push('/user/list')
    }
  }
}
</script>
