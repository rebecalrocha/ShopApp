// ACTION
export const toggleLogin = () => ({
  type: 'LOG_IN'
})

export const incrementCart = (newProduct) => ({
  type: 'INCREMENT_CART',
  payload: newProduct // object
})

export const decrementCart = (productId) => ({
  type: 'DECREMENT_CART',
  payload: productId // id
})

export const incrementProduct = (id) => ({
  type: 'INCREMENT_PRODUCT',
  payload: id
})

export const decrementProduct = (id) => ({
  type: 'DECREMENT_PRODUCT',
  payload: id
})

export const deleteCart = () => ({
  type: 'DELETE_CART'
})

export const sendMessage = (message) => ({
  type: 'SEND',
  payload: message // object
})

export const closeMessage = () => ({
  type: 'CLOSE'
})
