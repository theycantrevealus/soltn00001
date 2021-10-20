<template>
  <Card>
    <template #title>
      Simple Card
    </template>
    <template #content>
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Card from 'primevue/card'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld, Card
  }
})
</script>
