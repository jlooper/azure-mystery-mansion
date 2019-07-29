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
      <span class="command" @click="prompt('showKey', '🔑 to the front door')"
        >Walk up the front steps.</span
      >
    </p>

    <!--<v-popover>
      <span>key</span>
      <template slot="popover">
        <span @click="addToInventory('🔑')">{{ msg }}</span>
      </template>
    </v-popover>-->

    <p v-if="showKey">
      There appears to be a
      <span v-tooltip.right="msg">🔑</span> under the doormat.
    </p>
    <p v-for="command in commands" :key="command">{{ command }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commands: [],
      instructions: [],
      inventory: [],
      msg: 'Get',
      showKey: ''
    }
  },
  methods: {
    prompt(item, object) {
      if (!object) {
        this.commands.push("There's nothing interesting here.")
      } else {
        this.showKey = true
      }
    },
    addToInventory(obj) {
      this.inventory.push(obj)
    }
  }
}
</script>
<style>
body {
  background: url(~assets/mansion.jpg) no-repeat center center fixed;
}
</style>
