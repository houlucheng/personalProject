export default {
  getCartLength(state, getters) {
    return state.cartList.length
  },
  cartList(state, getters) {
    return state.cartList
  }
}