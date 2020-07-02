//ACTION
export const increment = () => {
    return {
      type: 'INCREMENT' //name
      
    }
  }
  
export const decrement = () => {
    return {
      type: 'DECREMENT',
      //payload: number //data
    }
}

export const login = () => {
    return {
        type: 'LOG_IN'
    }
}

export const incrementCart = (newProduct) => ({
  type: 'INCREMENT_CART',
  payload: newProduct //object
})

export const decrementCart = (deletedProductId) => ({
  type: 'DECREMENT_CART',
  payload: deletedProductId //id
})

export const incrementProduct = (id) => ({
  type: 'INCREMENT_PRODUCT',
  payload: id
})

export const decrementProduct = (id) => ({
  type: 'DECREMENT_PRODUCT',
  payload: id
})