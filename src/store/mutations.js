export default {
  // mutations唯一目的是修改state中的状态
  // mutations中的每个方法尽可能完成的事件单一一点
  addCount(state, payload) {
    payload.count++
  },
  addGoods(state, payload) {
    payload.count = 1
    state.cartList.push(payload)
  }
}