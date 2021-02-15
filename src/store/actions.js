export default {
  addCart(context, payload) {
    return new Promise((resolve) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit("addCount", oldProduct)
        resolve("商品数量+1")
      } else {
        context.commit("addGoods",payload)
        resolve("商品类别+1")
      }
    })
  }
}