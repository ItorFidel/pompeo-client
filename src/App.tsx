import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Navbar from "./routes/global/Navbar";
import SubFooter from "./components/SubFooter";
import AppLoading from "./components/AppLoading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./components/ErrorHandler";
import Register from "./routes/Register";
import Checkout from "./routes/Checkout";
import Profile from "./routes/Profile";
import { logoutUser, selectUser } from "./features/userSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Shop = lazy(() => import("./routes/Shop"));
const ContactUs = lazy(() => import("./routes/ContactUs"));
const Product = lazy(() => import("./routes/Product"));
const Login = lazy(() => import("./routes/Login"));

const App = () => {
  const email = useAppSelector(selectUser).email;
  const expires = useAppSelector(selectUser).expires;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentTime = new Date().getTime();

    if (expires && currentTime >= expires) {
      dispatch(logoutUser());
    }
  }, [dispatch, expires]);

  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <div className="app">
        <Navbar />
        <Suspense fallback={<AppLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:productSlug" element={<Product />} />
            <Route
              path="/checkout"
              element={email ? <Checkout /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!email ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/sign-up"
              element={!email ? <Register /> : <Navigate to="/" />}
            />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/profile"
              element={email ? <Profile /> : <Navigate to="/login" />}
            />
          </Routes>
        </Suspense>
        <SubFooter />
      </div>
    </ErrorBoundary>
  );
};

export default App;
