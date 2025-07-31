import { ProductProps, UserProps } from "./services/types";

export const initialProduct: ProductProps = {
  _id: "",
  image: "",
  title: "",
  price: "",
  desc: "",
  category: "",
  trackNumber: 0,
  transactions: [],
};

export const initialUser: UserProps = {
  _id: "",
  fullName: "",
  email: "",
  username: "",
  cart: {
    cartItems: [{ item: initialProduct, count: 0 }],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  orders: {
    current: [],
    history: [],
  },
  isAdmin: false,
  expires: 0,
};

export const networkError = {
  type: "networkError",
  message: "Failed to connect.",
};

export const userClientErrorMessage = {
  fullName: "Full Name is required",
  email: "Email is required",
  username: "Username is required",
  password: "Password is required",
};
