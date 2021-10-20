<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <a href="#" @click="logout">Logout</a>
  </div>
  <router-view/>
</template>
<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('tn.sol.acc')
      this.$router.push('/login')
    }
  }
}
</script>
