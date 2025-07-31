import { useRef } from "react";
import styles from "../styles/routes/Product.module.scss";
import Hero from "../components/Hero";
import CollectionCard from "../components/CollectionCard";
import SocialLinks from "../components/SocialLinks";
import Button from "./global/Button";
import handleScrollToTop from "../helpers/scrollToTop";
import { useGetProductsQuery, useUpdateUserMutation } from "../services/api";
import CollectionLoading from "../components/CollectionLoading";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { incrementDefaultCartItem } from "../features/cartSlice";
import { selectprodLocation } from "../features/prodLocationSlice";
import { Link } from "react-router-dom";
import { incrementUserCartItem, selectUser } from "../features/userSlice";
import { CartItemProps } from "../services/types";

const Product = () => {
  const state = useAppSelector(selectprodLocation);
  const { data: collectionData } = useGetProductsQuery({
    category: state.category,
    homePage: false,
    relatedItems: true,
  });
  const dispatch = useAppDispatch();
  const productCountRef = useRef<HTMLInputElement>(null);
  const user = useAppSelector(selectUser);
  const [updateUser] = useUpdateUserMutation();

  const handleAddToCart = () => {
    if (productCountRef.current) {
      const count = parseInt(productCountRef.current.value);
      const product: CartItemProps = {
        item: state,
        count,
      };

      if (user.email) {
        dispatch(incrementUserCartItem(product));
        updateUser(user);
      } else {
        dispatch(incrementDefaultCartItem(product));
      }
    }
  };

  return (
    <main className={styles.product}>
      <Hero
        image="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fshop-hero-image.jpg?alt=media&token=0bf5abd7-664a-4eff-bcb4-4b524506c128"
        title="Product Page"
      >
        <p>
          The attractions of ceramics lie partly in its contradictions. It is
          both difficult and easy, with an element beyond our control. It is
          both extremely fragile and durable. Like &#39;Sumi&#39; ink painting,
          it does not lend itself to erasures and indecision.
        </p>
      </Hero>
      <div className={styles.productDetails}>
        <div className={styles.container}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${state.image})` }}
          ></div>
          <div className={styles.info}>
            <div className={styles.subTitle}>PRODUCT DETAIL</div>
            <h1 className={styles.title}>{state.title}</h1>
            <h3 className={styles.price}>{state.price}</h3>
            <p className={styles.desc}>{state.desc}</p>
            <div className={styles.order}>
              <div className={styles.orderDesc}>
                Category:{" "}
                <Link
                  to={`/shop?category=${state.category.toLowerCase()}`}
                  state={state.category}
                  onClick={handleScrollToTop}
                >
                  <span>{state.category}</span>
                </Link>
              </div>
              <div className={styles.orderDesc}>
                Track Number: <span>{state.trackNumber}</span>
              </div>
              <div className={`${styles.orderDesc} ${styles.socials}`}>
                Share on:{" "}
                <span>
                  <SocialLinks />
                </span>
              </div>
            </div>
            <div className={styles.quantity}>
              <div>Quantity</div>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min={1}
                defaultValue={1}
                ref={productCountRef}
              />
            </div>
            <Button onClick={handleAddToCart} className={styles.button}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.bdBottom}></div>
      <div className={styles.relatedItems}>
        <div className={styles.container}>
          <h3 className={styles.title}>Related Items</h3>
          <div className={styles.items}>
            <div className={styles.itemsContainer}>
              {collectionData?.length ? (
                collectionData.map((data, index) => (
                  <CollectionCard product={data} key={index} />
                ))
              ) : (
                <CollectionLoading />
              )}
            </div>
            <Button onClick={handleScrollToTop}>Back to shop</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
