import { CartProps } from "../services/types";

const setTotalCartQtyAmt = (state: CartProps) => {
  state.cartTotalQuantity = state.cartItems.reduce((total, item) => {
    return (total += item.count);
  }, 0);
  state.cartTotalAmount = state.cartItems.reduce((total, item) => {
    const totalPrice = parseFloat(item.item.price.split(" ")[1]) * item.count;
    return (total += totalPrice);
  }, 0);
};

export default setTotalCartQtyAmt;
