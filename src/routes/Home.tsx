import { useInView } from "react-intersection-observer";
import Category from "../components/Category";
import CollectionCard from "../components/CollectionCard";
import CollectionLoading from "../components/CollectionLoading";
import Footer from "../components/Footer";
import LatestNews from "../components/LatestNews";
import Showcase from "../components/Showcase";
import handleScrollToTop from "../helpers/scrollToTop";
import { useGetProductsQuery } from "../services/api";
import styles from "../styles/routes/Home.module.scss";
import ContentWrapper from "./global/ContentWrapper";
import ButtonLink from "./global/ButtonLink";

const Home = () => {
  const { data: collectionData } = useGetProductsQuery({
    category: "All",
    homePage: true,
    relatedItems: false,
  });
  const { ref: collectionRef, inView: collectionInView } = useInView();
  const { ref: startShoppingRef, inView: startShoppingInView } = useInView();

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.subTitle}>pompeo pottery</p>
            <h1>
              Unique Porcelain <span>&</span> Stone Collection
            </h1>
            <p className={styles.subText}>
              Unique & modern pottery made by our master in porcelain & stones
            </p>
            <ButtonLink linkTo="/shop" onClick={handleScrollToTop}>
              Shop Collection
            </ButtonLink>
          </div>
          <div className={styles.right}>
            <div className={styles.image}></div>
          </div>
        </div>
      </section>
      <Category />
      <ContentWrapper
        sideText="Featured products"
        sideTextOrientation="right"
        className={styles.featured}
      >
        <Showcase
          image="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Ffeatured-image-1.png?alt=media&token=240780b7-dfa4-4107-a6de-01cf910c4d2a"
          title="Gold & Black Pottery"
          to="/"
          linkText="View Details"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
          veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
          commodo consequatuisaute.
        </Showcase>
        <Showcase
          image="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Ffeatured-image-2.png?alt=media&token=8bc259f2-c626-4611-a5c3-694280930415"
          title="Orange Ceramic"
          to="/"
          linkText="View Details"
          className={styles.showcase2}
          reverse={true}
        >
          Pri cu dico labores officiis, odio principes complectitur ad sea. Sea
          id doctus forensibus, nec lorem vocent aliquam eu. Aliquid
          definitiones id cum, ad meliore perpetua referrentur sed. Quas
          suscipit ad mea verear vivendo tincidunt.
        </Showcase>
      </ContentWrapper>
      <ContentWrapper
        sideText="Product collections"
        titleSm="Our online store"
        titleLg="Pottery collection"
      >
        <div
          className={`${styles.collection} ${
            collectionInView ? styles.inView : ""
          }`}
          ref={collectionRef}
        >
          {collectionData?.length ? (
            collectionData.map((product, index) => (
              <CollectionCard product={product} key={index} />
            ))
          ) : (
            <CollectionLoading />
          )}
        </div>
        <div className={styles.collectionButton}>
          <ButtonLink linkTo="/shop" onClick={handleScrollToTop}>
            view all products
          </ButtonLink>
        </div>
      </ContentWrapper>
      <section className={styles.startShopping}>
        <div
          className={`${styles.container} ${
            startShoppingInView ? styles.inView : ""
          }`}
          ref={startShoppingRef}
        >
          <div className={styles.subtitle}>pompeo pottery</div>
          <h1 className={styles.title}>Ready to start shopping?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet,&nbsp;
            <span className={styles.highlightRed}>
              consectetur adipiscing elit
            </span>
            . Suspendisse varius enim in eros elementum.
          </p>
          <ButtonLink linkTo="/shop" onClick={handleScrollToTop}>
            New collection
          </ButtonLink>
        </div>
      </section>
      <LatestNews />
      <Footer />
    </main>
  );
};

export default Home;
