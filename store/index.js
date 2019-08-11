export const state = () => ({
  inventory: [],
  backgroundPath: ''
})

export const mutations = {
  add(state, payload) {
    if (!state.inventory.includes(payload)) {
      state.inventory.push(payload)
    }
  },
  getBackground(state, payload) {
    state.backgroundPath = payload
  }
}
