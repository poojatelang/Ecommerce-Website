import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("PoojaCartitem");
    const parseData=JSON.parse(localCartData);
    if(!Array.isArray(parseData))return [];
    return parseData;
  };
const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
    
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const addToCart = (id, color, count, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, count, product } });
    };
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    };

    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    };

    // to remove the individual item from cart
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };
    useEffect(() => {
        dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    
        localStorage.setItem("PoojaCartitem", JSON.stringify(state.cart));
      }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeItem,
                clearCart,
                setDecrease,
                setIncrease,

            }}>
            {children}
        </CartContext.Provider>
    );
};
const useCartContext = () => {
    return useContext(CartContext);
};
export { CartProvider, useCartContext }