import {ADD_COUNTER, ADD_TO_CART} from './mutations-types'

export default {
  addCart(context, payload) {
      let oldProduct = null
      // for(let item of state.cartList){
      //     if(item.iid == payload.iid){
      //         oldProduct = item
      //     }
      // }

      oldProduct = context.state.cartList.find((item) => {
        return item.iid == payload.iid
      })

      if(oldProduct){
          context.commit(ADD_COUNTER, oldProduct)
          // oldProduct.count += 1
      }else{
          payload.count = 1
          context.commit(ADD_TO_CART, payload)
      }
      
  }
}