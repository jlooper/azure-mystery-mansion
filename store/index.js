export const state = () => ({
  inventory: []
})

export const mutations = {
  add(state, payload) {
    if (!state.inventory.includes(payload)) {
      state.inventory.push(payload)
    }
  }
}
