import React, { useState } from "react";
import styles from "../styles/routes/Checkout.module.scss";
import Input from "./global/Input";
import { CreditCardOutlined, DateRangeOutlined } from "@mui/icons-material";
import AuthForm from "../components/AuthForm";
import { useOrderMutation } from "../services/api";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/userSlice";
import { CheckoutProps, TransactionProps } from "../services/types";
import {
  handleEventBlurCapture,
  handleEventChange,
} from "../helpers/handleEvents";
import { triggerError, triggerErrorMessage } from "../helpers/errorTriggers";

const initialBody: CheckoutProps = {
  creditCardName: "",
  creditCardNumber: 0,
  expirationDate: 0,
  cvv: 0,
};

const initialIsError = {
  creditCardName: false,
  creditCardNumber: false,
  expirationDate: false,
  cvv: false,
};

const clientErrorMsg = {
  creditCardName: "Card Name is required",
  creditCardNumber: "Card Number is required",
  expirationDate: "Expiry Date is required",
  cvv: "CVV is required",
};

const initialServerErrorMsg = {
  creditCardName: "",
  creditCardNumber: "",
  expirationDate: "",
  cvv: "",
};

const Checkout = () => {
  const [body, setBody] = useState(initialBody);
  const [isClientError, setIsClientError] = useState(initialIsError);
  const [isServerError, setIsServerError] = useState(initialIsError);
  const [serverErrorMsg, setServerErrorMsg] = useState(initialServerErrorMsg);

  const [orderProduct, { isError }] = useOrderMutation({});
  const user = useAppSelector(selectUser);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const transactionId = Math.floor(
      Math.random() * (99999999 - 10000000 + 1) + 10000000
    );

    const transaction: TransactionProps = {
      id: transactionId,
      buyer: user.fullName.split(" ").join("%"),
      amount: user.cart.cartTotalAmount,
      products: user.cart.cartItems.map((cartItem) => cartItem.item._id),
      status: "paid",
    };

    if (Object.keys(body).some((value) => value === "")) {
      triggerError(isClientError, true, setIsClientError);
    } else {
      await orderProduct(transaction)
        .unwrap()
        .then(() => alert("items purchased successfully!"))
        .catch((error) => {
          const { data: errorData } = error;

          switch (errorData.type) {
            case "creditCardNameError":
              triggerError(isServerError, false, setIsServerError, {
                creditCardName: true,
              });
              triggerErrorMessage(
                initialServerErrorMsg,
                "",
                setServerErrorMsg,
                {
                  creditCardName: errorData.message,
                }
              );
              break;
            case "creditCardNumberError":
              triggerError(isServerError, false, setIsServerError, {
                creditCardNumber: true,
              });
              triggerErrorMessage(
                initialServerErrorMsg,
                "",
                setServerErrorMsg,
                {
                  creditCardNumber: errorData.message,
                }
              );
              break;
            case "expirationDateError":
              triggerError(isServerError, false, setIsServerError, {
                expirationDate: true,
              });
              triggerErrorMessage(
                initialServerErrorMsg,
                "",
                setServerErrorMsg,
                {
                  expirationDate: errorData.message,
                }
              );
              break;
            case "cvvError":
              triggerError(isServerError, false, setIsServerError, {
                cvv: true,
              });
              triggerErrorMessage(
                initialServerErrorMsg,
                "",
                setServerErrorMsg,
                {
                  cvv: errorData.message,
                }
              );
              break;
            default:
              triggerError(isServerError, true, setIsServerError);
              triggerErrorMessage(
                initialServerErrorMsg,
                errorData.message,
                setServerErrorMsg
              );
              break;
          }
        });

      // handle billing
    }
  };

  return (
    <main>
      <AuthForm
        title="Checkout"
        btnText="place order"
        onSubmit={handleLogin}
        className={styles.form}
      >
        <div className={styles.inputContainer}>
          <Input
            label="Credit Card Name"
            type="text"
            placeholder="John Doe"
            id="creditCardName"
            svg={<CreditCardOutlined />}
            className={styles.input}
            isClientError={isClientError.creditCardName}
            clientErrorMessage={clientErrorMsg.creditCardName}
            isServerError={isError}
            serverErrorMessage={serverErrorMsg.creditCardName}
            onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
            onChange={(e) => handleEventChange(e, setBody)}
          />
          <Input
            label="Credit Card Number"
            type="text"
            placeholder="1234 1234 1234 1234"
            id="creditCardNumber"
            svg={<CreditCardOutlined />}
            className={styles.input}
            isClientError={isClientError.creditCardNumber}
            clientErrorMessage={clientErrorMsg.creditCardNumber}
            isServerError={isError}
            serverErrorMessage={serverErrorMsg.creditCardNumber}
            onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
            onChange={(e) => handleEventChange(e, setBody)}
          />
          <Input
            label="Expiration Date"
            type="text"
            placeholder="10/23"
            id="expirationDate"
            svg={<DateRangeOutlined />}
            className={styles.input}
            isClientError={isClientError.expirationDate}
            clientErrorMessage={clientErrorMsg.expirationDate}
            isServerError={isError}
            serverErrorMessage={serverErrorMsg.expirationDate}
            onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
            onChange={(e) => handleEventChange(e, setBody)}
          />
          <Input
            label="CVV"
            type="text"
            placeholder="123"
            id="cvv"
            svg={<CreditCardOutlined />}
            className={styles.input}
            isClientError={isClientError.cvv}
            clientErrorMessage={clientErrorMsg.cvv}
            isServerError={isError}
            serverErrorMessage={serverErrorMsg.cvv}
            onBlurCapture={(e) => handleEventBlurCapture(e, setIsClientError)}
            onChange={(e) => handleEventChange(e, setBody)}
          />
        </div>
        <div className={styles.checkoutTotal}>
          <p>
            <span className={styles.key}>subTotal: </span>
            <span className={styles.value}>{`$${
              user.cart.cartTotalAmount || 0
            }.00`}</span>
          </p>
          <p>
            <span className={styles.key}>shipping: </span>
            <span className={styles.value}>Free</span>
          </p>
          <p>
            <span className={styles.key}>total: </span>
            <span className={styles.value}>{`$${
              user.cart.cartTotalAmount || 0
            }.00 USD`}</span>
          </p>
        </div>
      </AuthForm>
    </main>
  );
};

export default Checkout;
