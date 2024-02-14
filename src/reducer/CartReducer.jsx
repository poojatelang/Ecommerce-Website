const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, count, product } = action.payload;
        let existingProduct = state.cart.find(
            (curItem) => curItem.id === id + color
        );

        if (existingProduct) {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === id + color) {
                    let newCount = curElem.count + count;

                    if (newCount >= curElem.max) {
                        newCount = curElem.max;
                    }
                    return {
                        ...curElem,
                        count: newCount,
                    };
                } else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
               
            };
        } else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                count,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            };

            return {
                ...state,
                cart: [...state.cart, cartProduct],
               
            };
        }
    }
    // to set the increment and decrement
    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let decCount = curElem.count - 1;

                if (decCount <= 1) {
                    decCount = 1;
                }

                return {
                    ...curElem,
                    count: decCount,
                };
            } else {
                return curElem;
            }
        });
        return { ...state, cart: updatedProduct };
    }

    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let incCount = curElem.count + 1;

                if (incCount >= curElem.max) {
                    incCount = curElem.max;
                }

                return {
                    ...curElem,
                    count: incCount,
                };
            } else {
                return curElem;
            }
        });
        return { ...state, cart: updatedProduct };
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curItem) => curItem.id !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }
    if (action.type === "CART_ITEM_PRICE_TOTAL") {
        var { total_item, total_price } = state.cart.reduce(
          (accum, curElem) => {
            let { price, count } = curElem;
    
            accum.total_item += count;
            accum.total_price += price * count;
    
            return accum;
          },
          {
            total_item: 0,
            total_price: 0,
          }
        );
        return {
          ...state,
          total_item,
          total_price,
        };
      }
    
      return state;
}

export default cartReducer;