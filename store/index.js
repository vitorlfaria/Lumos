export const state = () => ({
  linkWpp: 'https://bit.ly/ContatoLumosSite'
})

export const getters = {
  getLinkWpp(state) {
    return state.linkWpp
  }
}
