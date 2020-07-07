const messageReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SEND':
            return action.payload
            
        case 'CLOSE':
            return {}

        default:
        return state
    }
  }

export default messageReducer;