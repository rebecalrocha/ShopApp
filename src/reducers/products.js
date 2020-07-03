const productsReducer = (state = [], action) => {

    switch (action.type) {
        case 'INCREMENT_CART':
            return [...state, { ...action.payload, quantity: 1 }]
            
        case 'DECREMENT_CART':
            return state.filter(product => product.id !== action.payload)

        case 'INCREMENT_PRODUCT':
            return state.map(product => 
                product.id === action.payload ? {...product, quantity: product.quantity + 1 } : product)

        case 'DECREMENT_PRODUCT':
            return state.map(product => 
                (product.id === action.payload && product.quantity > 1) ? {...product, quantity: product.quantity - 1 } : product)

        case 'DELETE_CART':
            return []

        default:
        return state
    }
  }

export default productsReducer;