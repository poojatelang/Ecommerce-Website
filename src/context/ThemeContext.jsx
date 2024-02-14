import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/ThemeReducer"

const ThemeContext = createContext();

const initialState = {
    themecolor:true,
  };

  export const ThemeContextProvider = ({ children }) => {
  
    const [state, dispatch] = useReducer(reducer, initialState);
    
     const themeToggler=()=>{
        dispatch({type:'THEME_CHANGE'})
    }
   
    return (
        <ThemeContext.Provider
          value={{
            ...state,
            themeToggler,
           
          }}>
          {children}
        </ThemeContext.Provider>
      );
    };
    
    export const useThemeContext = () => {
      return useContext(ThemeContext);
    };
  
  