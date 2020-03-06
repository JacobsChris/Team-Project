const initialState = {
    token: []
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_TOKEN) {
        state.articles.push(action.payload);
      }
    return state;
  };
  
  export default rootReducer;