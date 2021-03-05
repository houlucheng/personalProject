import {ADD_COUNTER, ADD_TO_CART} from './mutations-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null
      // for(let item of state.cartList){
      //     if(item.iid == payload.iid){
      //         oldProduct = item
      //     }
      // }

      oldProduct = context.state.cartList.find((item) => {
        return item.iid == payload.iid
      })

      if(oldProduct){ // 数量加一
          context.commit(ADD_COUNTER, oldProduct)
          // oldProduct.count += 1
          resolve("数量加一")
      }else{ //添加新商品
          payload.count = 1
          context.commit(ADD_TO_CART, payload)
          resolve("添加新商品")
      }
    })
      
  }
}