import styles from "../styles/routes/Shop.module.scss";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import { useGetProductsQuery } from "../services/api";
import { useInView } from "react-intersection-observer";
import ContentWrapper from "./global/ContentWrapper";
import CollectionCard from "../components/CollectionCard";
import CollectionLoading from "../components/CollectionLoading";
import { Link, useLocation } from "react-router-dom";

const Shop = () => {
  const category = useLocation().state;
  const { data: collectionData } = useGetProductsQuery({
    category: category || "All",
    homePage: false,
    relatedItems: false,
  });
  const [ref, inView] = useInView();

  return (
    <main className={styles.shop}>
      <Hero
        image="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fshop-hero-image.jpg?alt=media&token=0bf5abd7-664a-4eff-bcb4-4b524506c128"
        title="Shop"
      >
        <p>
          The attractions of ceramics lie partly in its contradictions. It is
          both difficult and easy, with an element beyond our control. It is
          both extremely fragile and durable. Like &#39;Sumi&#39; ink painting,
          it does not lend itself to erasures and indecision.
        </p>
      </Hero>
      <ContentWrapper
        titleLg="Pottery Collection"
        titleSm="OUR ONLINE STORE"
        sideText="PRODUCT COLLECTIONS"
      >
        {category && (
          <h1 className={styles.searchResults}>
            {collectionData?.length} Results for "{category}".{" "}
            <Link
              to="/shop"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className={styles.clear}>Clear Results</span>
            </Link>
          </h1>
        )}
        <div
          className={`${styles.collection} ${inView ? styles.slideIn : ""}`}
          ref={ref}
        >
          {collectionData?.length ? (
            collectionData.map((data, index) => (
              <CollectionCard product={data} key={index} />
            ))
          ) : (
            <CollectionLoading />
          )}
        </div>
        <div className={styles.collectionButton}></div>
      </ContentWrapper>
      <LatestNews />
    </main>
  );
};

export default Shop;
