const themeReducer = (state, action) => {
    switch (action.type) {
      case 'THEME_CHANGE':
        return{
            ... state,
            themecolor: !state.themecolor,
        }
        
      default:
        return state;
    }
  };
  
  export default themeReducer;