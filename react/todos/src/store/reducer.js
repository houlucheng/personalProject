let initState = {
  title: 'Hello redux',
  cart: ['react', 'vue']
}

function reducer(state = initState, action) {
  switch(action.type) {
    case 'editTitle':
      return Object.assign({}, state, {
        title: action.data
      })
    case 'add':
      return Object.assign({}, state, {
        cart: ['123']
      })
    default :
      return state
  }
}

export default reducer