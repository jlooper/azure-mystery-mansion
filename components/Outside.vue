<template>
  <div>
    <p class="text-title">Please Come In</p>
    <p>
      You are standing in front of an old house. It seems to have been abandoned
      many years ago.
    </p>
    <p>There seems to be a rusty old car on the grass. You can:</p>
    <p>
      <span class="command" @click="deadend">Explore the car</span>
    </p>
    <p>
      <span class="command">Walk up the front steps</span>
    </p>
    <p v-for="command in commands" :key="command">{{ command }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commands: []
    }
  },
  methods: {
    deadend() {
      this.commands.push('oops')
    }
  }
}
</script>
<style>
body {
  background: url(~assets/mansion.jpg) no-repeat center center fixed;
}
</style>
