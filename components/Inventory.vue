<template>
  <div class="inventory">
    <p class="text-title">Inventory</p>
    <p v-for="item in inventory" :key="item">{{ item }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    inventory() {
      return this.$store.state.inventory
    }
  }
}
</script>
