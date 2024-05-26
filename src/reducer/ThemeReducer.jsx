const themeReducer = (state, action) => {
    // switch (action.type) {
    //   case 'THEME_CHANGE':
    //     return{
    //         ... state,
    //         themecolor: !state.themecolor,
    //     }
        
    //   default:
    //     return state;
    // }
    if(action.type==='THEME_CHANGE'){
       return{
        ...state,
        themecolor:!state.themecolor
       }
    }
  };
  
  export default themeReducer;