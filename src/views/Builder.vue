<template>
  <div class="main-container">
    <TopPanelBar />
    <div class="sidepanel">
      <SidePanelBar />
    </div>
    <div class="loadpanel">
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import TopPanelBar from '@/components/TopPanelBar'
import SidePanelBar from '@/components/SidePanelBar'

export default {
  name: 'Builder',
  components: {
    TopPanelBar, SidePanelBar
  }

}
</script>
