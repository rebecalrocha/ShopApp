// REDUCER -> HOW ACTIONS TRANFORM STATE INTO ANOTHER STATE
const loggerReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return !state // state = true
    default:
      return state
  }
}

export default loggerReducer
