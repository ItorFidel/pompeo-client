import styles from "../styles/components/OurCrewCard.module.scss";
import SocialLinks from "./SocialLinks";

interface Props {
  image: string;
  title: string;
  subTitle: string;
  desc: string;
}

const OurCrewCard = ({ image, title, subTitle, desc }: Props) => {
  return (
    <div className={styles.ourCrewCard}>
      <div className={styles.profile}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subTitle}>{subTitle}</h3>
      </div>
      <p className={styles.desc}>{desc}</p>
      <SocialLinks />
    </div>
  );
};

export default OurCrewCard;
