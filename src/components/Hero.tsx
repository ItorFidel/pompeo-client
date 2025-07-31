import styles from "../styles/components/Hero.module.scss";

interface Props {
  image: string;
  title: string;
  children: string | React.ReactElement;
}

const Hero = ({ image, title, children }: Props) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Hero;
