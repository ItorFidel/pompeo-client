import { useState, useRef } from "react";
import styles from "../../styles/routes/global/Navbar.module.scss";
import Logo from "./Logo";
import NavbarLink from "./NavbarLink";
import {
  Close,
  Logout,
  Menu,
  Person,
  PersonOutline,
  Settings,
} from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct, removeDefaultCartItem } from "../../features/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import InputCount from "./InputCount";
import {
  logoutUser,
  removeUserCartItem,
  selectUser,
} from "../../features/userSlice";
import handleScrollToTop from "../../helpers/scrollToTop";
import { useLogoutMutation, useUpdateUserMutation } from "../../services/api";
import useClosePopup from "../../hooks/closePopup";

const Navbar = () => {
  const defaulCart = useAppSelector(selectProduct);
  const user = useAppSelector(selectUser);
  const userCart = user.cart;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartIconRef = useRef<HTMLDivElement>(null);
  const cartInnerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLUListElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const menuDropdownRef = useRef<HTMLUListElement>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useAppDispatch();

  const handleCloseMenu = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    if ((e.target as HTMLElement).closest("li")) {
      setIsMenuOpen((state) => !state);
    }
  };

  const handleToggleCart = () => {
    setIsCartOpen((state) => !state);
  };

  const handleRemoveItem = (id: string) => {
    if (user.email) {
      dispatch(removeUserCartItem(id));
      updateUser(user);
    } else {
      dispatch(removeDefaultCartItem(id));
    }
  };

  const handleToggleProfile = () => {
    setIsProfileOpen((state) => !state);
  };

  const handleLogout = () => {
    if (user.email) {
      logout()
        .unwrap()
        .then(() => {
          dispatch(logoutUser());
          navigate("/login", { replace: true });
        });
    }

    handleToggleProfile();
  };

  useClosePopup(setIsCartOpen, cartInnerRef, cartIconRef);
  useClosePopup(setIsProfileOpen, profileDropdownRef, profileRef);
  useClosePopup(setIsMenuOpen, menuDropdownRef, menuIconRef);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.navigation}>
          <ul
            className={`${styles.list} ${isMenuOpen ? styles.show : ""}`}
            onClick={handleCloseMenu}
            ref={menuDropdownRef}
          >
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/shop">Shop</NavbarLink>
            <NavbarLink to="/contact-us">Contact</NavbarLink>
          </ul>

          <div
            className={styles.cart}
            onClick={handleToggleCart}
            ref={cartIconRef}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fshopping-cart.svg?alt=media&token=6770ca47-f068-492a-880c-273ca719571a"
              alt=""
            />{" "}
            Cart{" "}
            {userCart.cartTotalQuantity || defaulCart.cartTotalQuantity ? (
              <span className={styles.quantity}>
                {user.email
                  ? userCart.cartTotalQuantity
                  : defaulCart.cartTotalQuantity}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className={styles.profile}>
            <div
              className={styles.container}
              onClick={handleToggleProfile}
              ref={profileRef}
            >
              <div className={styles.imgContainer}>
                {user.profileImg ? (
                  <img src={user.profileImg} alt="" className={styles.image} />
                ) : (
                  <PersonOutline className={styles.icon} />
                )}
              </div>
              <span className={styles.name}>{user.username || "login"}</span>
            </div>
            <ul
              className={`${styles.dropdown} ${
                isProfileOpen ? styles.show : ""
              }`}
              ref={profileDropdownRef}
            >
              {user.email && (
                <NavbarLink
                  to={"/profile"}
                  className={styles.link}
                  onClick={handleToggleProfile}
                >
                  <Person />
                  <span>Profile</span>
                </NavbarLink>
              )}
              <NavbarLink
                to="/setting"
                className={styles.link}
                onClick={handleToggleProfile}
              >
                <Settings />
                <span>Settings</span>
              </NavbarLink>
              <NavbarLink
                to={user.email ? "#" : "/login"}
                className={styles.link}
                onClick={handleLogout}
              >
                <Logout />
                <span>{user.email ? "Logout" : "Login"}</span>
              </NavbarLink>
            </ul>
          </div>

          <span
            className={styles.mobileMenuIcon}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            ref={menuIconRef}
          >
            <Menu />
          </span>
        </nav>

        <div
          className={`${styles.cartOverlay} ${
            isCartOpen ? styles.cartOpen : ""
          }`}
        ></div>
        <div
          className={`${styles.cartOverlayInner} ${
            isCartOpen ? styles.cartOpen : ""
          }`}
          ref={cartInnerRef}
        >
          <div className={styles.cartOverlayHeader}>
            <h2>Your Cart</h2>
            <Close onClick={handleToggleCart} />
          </div>
          <div className={styles.cartOverlayBody}>
            {user.email && userCart.cartItems.length ? (
              userCart.cartItems.map((cartItem, index) => (
                <div className={styles.cartOverlayItem} key={index}>
                  <img src={cartItem.item.image} alt="" />
                  <div className={styles.cartOverlayItemDetails}>
                    <h2 className={styles.title}>{cartItem.item.title}</h2>
                    <h2 className={styles.price}>{cartItem.item.price}</h2>
                    <Link
                      to="#"
                      onClick={() => handleRemoveItem(cartItem.item._id)}
                    >
                      Remove
                    </Link>
                  </div>
                  <InputCount item={cartItem} />
                </div>
              ))
            ) : !user.email && defaulCart.cartItems.length ? (
              defaulCart.cartItems.map((cartItem, index) => (
                <div className={styles.cartOverlayItem} key={index}>
                  <img src={cartItem.item.image} alt="" />
                  <div className={styles.cartOverlayItemDetails}>
                    <h2 className={styles.title}>{cartItem.item.title}</h2>
                    <h2 className={styles.price}>{cartItem.item.price}</h2>
                    <Link
                      to="#"
                      onClick={() => handleRemoveItem(cartItem.item._id)}
                    >
                      Remove
                    </Link>
                  </div>
                  <InputCount item={cartItem} />
                </div>
              ))
            ) : (
              <h1 className={styles.noItems}>No Items found.</h1>
            )}
          </div>
          <div className={styles.cartOverlayFooter}>
            <div className={styles.subTotal}>
              <span>Subtotal</span>
              <span className={styles.subTotalPrice}>{`$ ${
                user.email
                  ? userCart.cartTotalAmount
                  : defaulCart.cartTotalAmount
              }.00 USD`}</span>
            </div>
            <ButtonLink
              linkTo={user.email ? "/checkout" : "/login"}
              className={styles.checkoutBtn}
              onClick={() => {
                handleToggleCart();
                handleScrollToTop();
              }}
            >
              proceed to checkout
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
