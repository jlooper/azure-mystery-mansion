<template>
  <div class="wrapper">
    <Header />
    <div class="parent">
      <Inventory />
      <div class="terminal">
        <nuxt />
      </div>
      <InstructionPanel />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Inventory from '~/components/Inventory.vue'
import InstructionPanel from '~/components/InstructionPanel.vue'

export default {
  components: {
    Header,
    Inventory,
    InstructionPanel
  }
}
</script>

<style scoped>
#__layout {
  height: 100%;
}
.wrapper {
  width: 100%;
  height: 100%;
  background-image: url('~assets/hall.jpg');
  background-size: cover;
  background-attachment: fixed;
  font-family: 'VT323', 'Courier New', monospace;
  font-size: 18px;
  color: #6ee38d;
}
</style>
