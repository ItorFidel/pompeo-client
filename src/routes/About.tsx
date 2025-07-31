import styles from "../styles/routes/About.module.scss";
import Hero from "../components/Hero";
import Category from "../components/Category";
import ContentWrapper from "./global/ContentWrapper";
import OurCrewCard from "../components/OurCrewCard";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import { useInView } from "react-intersection-observer";
import useWindowWidth from "../hooks/getWindowWidth";

const About = () => {
  const [ref, inView] = useInView();
  const { width } = useWindowWidth();

  return (
    <main className={styles.about}>
      <Hero
        image={
          width < 1024
            ? "https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fshop-hero-image.jpg?alt=media&token=0bf5abd7-664a-4eff-bcb4-4b524506c128"
            : "https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fabout-hero-image.jpg?alt=media&token=211abbe8-a597-4a89-ae6a-065b1cd8579d"
        }
        title="About Us"
      >
        <p>
          The attractions of ceramics lie partly in its contradictions. It is
          both difficult and easy, with an element beyond our control. It is
          both extremely fragile and durable. Like &#39;Sumi&#39; ink painting,
          it does not lend itself to erasures and indecision.
        </p>
      </Hero>
      <Category />
      <section className={styles.ourCrew}>
        <ContentWrapper
          sideText="OUR TALENTED CREW"
          titleSm="OUR CREW"
          titleLg="Talented Artists"
          sideTextOrientation="right"
        >
          <div className={styles.cardContainer}>
            <OurCrewCard
              image="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fprofile-image-1.jpeg?alt=media&token=ef18bf01-b57d-44cc-b659-2f7f4ffe2251"
              title="Maria Monroy"
              subTitle="SENIOR DESIGNER"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in eros elementum"
            />
            <OurCrewCard
              image="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fprofile-image-2.jpg?alt=media&token=a66fee47-c6c0-468b-b9ad-7983b1fa05a2"
              title="Dominic Basket"
              subTitle="SENIOR DESIGNER"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in eros elementum"
            />
            <OurCrewCard
              image="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fprofile-image-3.jpg?alt=media&token=99b41baf-9da1-4d04-acc1-f6ba56c1e4e2"
              title="Edward Fisher"
              subTitle="SENIOR DESIGNER"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in eros elementum"
            />
          </div>
        </ContentWrapper>
      </section>
      <ContentWrapper sideText="THIS IS OUR MISSION">
        <div className={styles.ourMission}>
          <div
            className={`${styles.image} ${inView ? styles.show : ""}`}
            style={{
              backgroundImage:
                "url(https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Ffeatured-image-1.png?alt=media&token=240780b7-dfa4-4107-a6de-01cf910c4d2a)",
            }}
            ref={ref}
          ></div>
          <Showcase
            image="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Ffeatured-image-2.png?alt=media&token=8bc259f2-c626-4611-a5c3-694280930415"
            title={
              <div>
                Created With Love
                <span className={styles.ampersandStyle}> & </span> Passion
              </div>
            }
            to="/shop"
            linkText="View More Pieces"
            className={styles.showcase}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </Showcase>
        </div>
      </ContentWrapper>
      <Footer />
    </main>
  );
};

export default About;
