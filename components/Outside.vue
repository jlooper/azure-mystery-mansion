<template>
  <div>
    <p class="text-title">Please Come In</p>

    <p>
      You are standing in front of an old house. It seems to have been abandoned
      many years ago.
    </p>
    <p>There seems to be a rusty old car on the grass. You can:</p>
    <p>
      <span class="command" @click="prompt()">Explore the car</span>
    </p>
    <p>
      <span class="command" @click="prompt('showObj', '🔑 to the front door')"
        >Walk up the front steps.</span
      >
    </p>

    <span v-if="showObj">
      <p>There appears to be a 🔑 under the doormat.</p>
      <p class="command" @click="add('🔑')">Collect</p>
      <p class="command">Ignore</p>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Get',
      showObj: ''
    }
  },
  computed: {
    inventory() {
      return this.$store.state.inventory
    }
  },
  methods: {
    add(item) {
      this.$store.commit('add', item)
    },
    prompt(item, object) {
      if (!object) {
        this.commands.push("There's nothing interesting here.")
      } else {
        this.showObj = true
      }
    }
  }
}
</script>
<style>
body {
  background: url(~assets/mansion.jpg) no-repeat center center fixed;
}
</style>
