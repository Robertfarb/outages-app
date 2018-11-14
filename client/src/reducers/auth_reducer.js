const initialState = {
  isAuthenticated: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    default:
      return state
  }
}

export default authReducer;