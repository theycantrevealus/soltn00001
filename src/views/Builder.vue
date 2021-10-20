<template>
  <div>
    <TopPanelBar />
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <a href="#" @click="logout">Logout</a>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import TopPanelBar from '@/components/TopPanelBar'
export default {
  name: 'Builder',
  components: {
    TopPanelBar
  }
}
</script>
