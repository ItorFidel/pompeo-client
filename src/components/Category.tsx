import styles from "../styles/components/Category.module.scss";
import { Link } from "react-router-dom";
import ContentWrapper from "../routes/global/ContentWrapper";
import handleScrollToTop from "../helpers/scrollToTop";

const Category = () => {
  return (
    <ContentWrapper
      sideText="Hand craft pottery"
      titleSm="Product categories"
      titleLg={
        <div>
          Porcelain
          <span> & </span>Pottery
        </div>
      }
    >
      <div className={styles.top}>
        <Link
          to="/shop?category=vases"
          className={styles.item}
          state="Vases"
          onClick={handleScrollToTop}
        >
          <div className={`${styles.disc} ${styles.yellow}`}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fvases.png?alt=media&token=39bfb4ee-1642-43e7-b742-441944d01766"
              alt=""
            />
            <h3>Vases</h3>
          </div>
        </Link>
        <Link
          to="/shop?category=mugs"
          className={styles.item}
          state="Mugs"
          onClick={handleScrollToTop}
        >
          <div className={`${styles.disc} ${styles.red}`}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fmugs.png?alt=media&token=06962048-368c-42e1-8fb5-a90404561c99"
              alt=""
            />
            <h3>Mugs</h3>
          </div>
        </Link>
        <Link
          to="/shop?category=plates"
          className={styles.item}
          state="Plates"
          onClick={handleScrollToTop}
        >
          <div className={`${styles.disc} ${styles.maroon}`}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fplates.png?alt=media&token=7480fdf1-0842-4e8a-856d-227a857ba70a"
              alt=""
            />
            <h3>Plates</h3>
          </div>
        </Link>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <h1>Hand Grafted Pottery since 1990</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </div>
        <div className={styles.container}>
          <h1>We Provide Premium Pottery Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Category;
