import React from "react";
import styles from "../../styles/routes/global/ContentWrapper.module.scss";

interface Props {
  sideText?: string;
  titleSm?: string;
  titleLg?: string | React.ReactElement;
  sideTextOrientation?: "left" | "right";
  capitalize?: "on" | "off";
  className?: string;
  children: React.ReactNode;
}

const ContentWrapper = ({
  sideText,
  titleSm,
  titleLg,
  sideTextOrientation,
  capitalize,
  className,
  children,
}: Props) => {
  return (
    <div className={`${styles.contextWrapper} ${className ? className : ""}`}>
      <div
        className={`${styles.sideText} ${
          sideTextOrientation === "right" ? styles.right : styles.left
        }`}
      >
        {sideText}
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          {titleSm && <div className={styles.small}>{titleSm}</div>}
          {titleLg && (
            <h2
              className={`${styles.large} ${
                capitalize === "off" ? styles.noCapitalize : ""
              }`}
            >
              {titleLg}
            </h2>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
