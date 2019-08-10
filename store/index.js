export const state = () => ({
  inventory: []
})

export const mutations = {
  add(state, payload) {
    state.inventory.push(payload)
  }
}
