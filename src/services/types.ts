export interface ProductProps {
  _id: string;
  image: string;
  title: string;
  price: string;
  desc: string;
  category: string;
  trackNumber: number;
  transactions: [];
}

export interface ProductQueryProps {
  category: string;
  homePage: boolean;
  relatedItems: boolean;
}

export interface CartItemProps {
  item: ProductProps;
  count: number;
}

export interface CartProps {
  cartItems: CartItemProps[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

interface OrdersProps {
  current: [];
  history: [];
}

export interface UserProps {
  _id?: string;
  fullName: string;
  email: string;
  username: string;
  password?: string;
  profileImg?: string;
  cart: CartProps;
  orders: OrdersProps;
  isAdmin: boolean;
  accessToken?: string;
  expires?: number;
}

export interface ReisterErrorProps {
  fullName: boolean;
  email: boolean;
  username: boolean;
  password: boolean;
}

export interface LoginProps {
  email: string;
  password: string;
  keepSignedIn: boolean;
}

export interface serverErrorProps {
  type: string;
  message: string;
}

export interface SendEmailProps {
  email: string;
}

export interface CheckoutProps {
  creditCardName: string;
  creditCardNumber: number;
  expirationDate: number;
  cvv: number;
}

export interface TransactionProps {
  id: number;
  buyer: string;
  amount: number;
  products: string[];
  status: string;
}
