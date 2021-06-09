import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import { ADD_ORDER } from '../actions/orders';
import { DELETE_PRODUCT } from '../actions/product';
import CartItem from '../../models/cart-item';

const initialState = {
  items: {},
  total: 0,
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { price, title, id } = action.product;
      let updatedProduct;

      if (state.items[id]) {
        const currProduct = state.items[id];
        updatedProduct = new CartItem(
          currProduct.quantity + 1,
          price,
          title,
          currProduct.sum + price,
        );
      } else {
        updatedProduct = new CartItem(1, price, title, price);
      }
      return {
        ...state,
        items: { ...state.items, [id]: updatedProduct },
        total: state.total + price,
      };
    case REMOVE_FROM_CART:
      const cartItem = state.items[action.id];
      const currentQuantity = cartItem.quantity;
      let updatedCart;
      if (currentQuantity > 1) {
        const updatedCartItem = new CartItem(
          cartItem.quantity - 1, cartItem.productPrice, cartItem.productTitle, cartItem.sum - cartItem.productPrice
        )
        updatedCart = { ...state.items, [action.id]: updatedCartItem };
      } else {
        updatedCart = { ...state.items };
        delete updatedCart[action.id];
      }
      return {
        ...state,
        items: updatedCart,
        total: state.total - cartItem.productPrice,
      }
    case ADD_ORDER:
      return initialState;
    case DELETE_PRODUCT:
      if (!state.items[action.id]) {
        return state;
      }
      const currCart = { ...state.items };
      const prodPrice = state.items[action.id].sum;
      delete currCart[action.id];
      return {
        ...state,
        items: currCart,
        total: state.total - prodPrice,
      }
    default:
      return state;
  }

}