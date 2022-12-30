export const state = () => ({
  linkWpp: 'https://wa.me/5541991860921'
})

export const getters = {
  getLinkWpp(state) {
    return state.linkWpp
  }
}
