import { Add, Remove } from "@mui/icons-material";
import styles from "../../styles/routes/global/InputCount.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  incrementDefaultCartItem,
  decrementDefaultCartItem,
} from "../../features/cartSlice";
import {
  incrementUserCartItem,
  decrementUserCartItem,
  selectUser,
} from "../../features/userSlice";
import { useUpdateUserMutation } from "../../services/api";
import { CartItemProps } from "../../services/types";
import { useEffect } from "react";

interface Props {
  item: CartItemProps;
}

const InputCount = ({ item }: Props) => {
  const user = useAppSelector(selectUser);
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    if (user.email) {
      dispatch(incrementUserCartItem(item));
    } else {
      dispatch(incrementDefaultCartItem(item));
    }
  };

  const handleDecrement = () => {
    if (user.email) {
      dispatch(decrementUserCartItem(item));
    } else {
      dispatch(decrementDefaultCartItem(item));
    }
  };

  useEffect(() => {
    updateUser(user);
  }, [user, updateUser]);

  return (
    <span className={styles.inputCount}>
      <button onClick={handleIncrement}>
        <Add />
      </button>
      <span className={styles.count}>{item.count}</span>
      <button onClick={handleDecrement}>
        <Remove />
      </button>
    </span>
  );
};

export default InputCount;
