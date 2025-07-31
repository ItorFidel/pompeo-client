import styles from "../styles/components/CollectionCard.module.scss";
import { Link } from "react-router-dom";
import { ProductProps } from "../services/types";
import { useAppDispatch } from "../app/hooks";
import { setProdLocation } from "../features/prodLocationSlice";

interface Props {
  product: ProductProps;
}

const CollectionCard = ({ product }: Props) => {
  const { image, title, price } = product;
  const dispatch = useAppDispatch();

  const handleProdLocation = () => {
    dispatch(setProdLocation(product));
  };

  return (
    <div className={styles.collectionCard} onClick={handleProdLocation}>
      <div className={styles.imgContainer}>
        <Link
          to={`/shop/${title.split(" ").join("-").toLowerCase()}`}
          className={styles.imgLink}
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className={styles.infoContainer}>
        <Link
          to={`/shop/${title.split(" ").join("-").toLowerCase()}`}
          className={styles.infoLink}
          onClick={() => window.scrollTo({ top: 0 })}
        >
          {title}
        </Link>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};

export default CollectionCard;
