<template>
  <div>
    <p class="text-title">Please Come In</p>

    <p>
      You are standing in front of an old house. It seems to have been abandoned
      many years ago.
    </p>
    <p>There seems to be a rusty old car on the grass. You can:</p>

    <p class="command" @click="showLookResult = !showLookResult">
      {{ lookCommands[stage] }}
    </p>

    <p v-show="showLookResult">{{ lookResult[stage] }}</p>

    <p class="command" @click="showGoResult = !showGoResult">
      {{ goCommands[stage] }}
    </p>

    <p v-show="showGoResult">{{ goResult[stage] }}</p>

    <p v-show="showGoResult" class="command">
      <span
        @click="
          showCollectResult = !showCollectResult
          add('🔑')
        "
        >Collect</span
      >
      <span>Ignore</span>
    </p>

    <p v-show="showCollectResult">{{ collectCommands[stage] }}</p>
    <p v-show="showCollectResult" class="command">
      <nuxt-link to="/hall">Go</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Get',
      showObj: '',
      items: ['🔑'],
      itemDescriptions: ['There appears to be a 🔑 under the welcome mat'],
      lookCommands: ['Examine the car'],
      lookResult: ["There's nothing here"],
      goCommands: ['Walk up the front steps'],
      goResult: ['There seems to be a 🔑 under the welcome mat'],
      collectCommands: ['You have the 🔑. You can open the front door.'],
      stage: 0,
      showLookResult: false,
      showGoResult: false,
      showCollectResult: false
    }
  },
  computed: {
    backgroundPath() {
      return this.$store.state.backgroundPath
    }
  },

  created() {
    /* :style="'background-image:url(' + backgroundPath + ')'" */
    this.$store.commit('getBackground', 'mansion.jpg')
  },

  methods: {
    add(item) {
      this.$store.commit('add', item)
    }
  }
}
</script>
