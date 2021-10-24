<template>
  <div class="p-grid">
    <div class="p-col-6">
      <Card>
        <template #title>
          Menu Management
        </template>
        <template #content>
        </template>
      </Card>
    </div>
    <div class="p-col-6">
      <Card>
        <template #title>
          Menu Management
        </template>
        <template #content>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card'

export default defineComponent({
  name: 'Module',
  components: {
    Card
  }
})
</script>
