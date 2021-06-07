import { ADD_TO_CART } from '../actions/cart';
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
    default:
      return state;
  }

}