import styles from "../styles/routes/ContactUs.module.scss";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContentWrapper from "./global/ContentWrapper";
import Input from "./global/Input";
import {
  EditOutlined,
  EmailOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";
import Button from "./global/Button";

const ContactUs = () => {
  return (
    <main className={styles.contactUs}>
      <Hero
        image="https://firebasestorage.googleapis.com/v0/b/pompeo-47e63.appspot.com/o/Assets%2Fcontact-us-hero-image.jpg?alt=media&token=e8157e5c-c5a3-477a-a5df-c144ab8a718c"
        title="Contact Us"
      >
        <p>
          The attractions of ceramics lie partly in its contradictions. It is
          both difficult and easy, with an element beyond our control. It is
          both extremely fragile and durable. Like &#39;Sumi&#39; ink painting,
          it does not lend itself to erasures and indecision.
        </p>
      </Hero>
      <ContentWrapper
        titleSm="Contact us"
        titleLg="Lets get in touch"
        className={styles.container}
      >
        <div className={styles.info}>
          <div className={styles.item}>
            <h3>Phone</h3>
            <p>+1 929 234 5678</p>
          </div>
          <div className={styles.item}>
            <h3>Location</h3>
            <p>2567 Fifth Ave, New York City, NY 20035, USA</p>
          </div>
          <div className={styles.item}>
            <h3>Email</h3>
            <p>pompeo@pottery1990.com</p>
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.heroImage}></div>
          <div className={styles.inputField}>
            <h1 className={styles.title}>Drop Us a Line</h1>
            <div className={styles.inputContainer}>
              <Input
                type="text"
                placeholder="Your name"
                id="name"
                svg={<PermIdentityOutlined />}
                label="Name:"
                className={styles.input}
              />
              <Input
                type="email"
                placeholder="Your email"
                id="email"
                svg={<EmailOutlined />}
                label="Email Address:"
                className={styles.input}
              />
            </div>
            <label htmlFor="message">Message:</label>
            <div className={styles.textareaContainer}>
              <EditOutlined className={styles.icon} />
              <textarea
                name="message"
                id="message"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <Button className={styles.submitBtn}>send message</Button>
          </div>
        </form>
      </ContentWrapper>
      <Footer />
    </main>
  );
};

export default ContactUs;
