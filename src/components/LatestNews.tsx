import styles from "../styles/components/LatestNews.module.scss";
import ContentWrapper from "../routes/global/ContentWrapper";
import { EmailOutlined } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import Input from "../routes/global/Input";

const LatestNews = () => {
  const { ref, inView } = useInView();

  return (
    <section className={styles.latestNews}>
      <div
        className={`${styles.container} ${inView ? styles.inView : ""}`}
        ref={ref}
      >
        <ContentWrapper
          sideText="Let's get in touch"
          titleSm="Latest news"
          titleLg={
            <div>
              Latest news <span> &</span> New updates
            </div>
          }
          sideTextOrientation="right"
          capitalize="off"
          className={styles.formContainer}
        >
          <div className={styles.paperJetContainer}>
            <div className={styles.img}></div>
          </div>
          <div className={styles.form}>
            <div className={styles.email}>
              <Input
                type="email"
                placeholder="Enter your email"
                svg={<EmailOutlined />}
                className={styles.input}
              />
              <button>SUBSCRIBE</button>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="latestNews"
                id="latestNews"
                defaultChecked
              />
              <label htmlFor="latestNews">Sign up for our newsletter</label>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
};

export default LatestNews;
