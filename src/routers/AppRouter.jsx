import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Main, Products } from "../views/index";
import BaseLayout from "../layouts/BaseLayout";
import ProductDetailsPage from "../views/ProductDetailsPage";
import AuthPage from "../views/AuthPage";

const AppRouter = () => {
  const getEmail = localStorage.getItem("userEmail");
  const getPassword = localStorage.getItem("userPassword");
  console.log(getEmail)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BaseLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<AuthPage />} />
          {getEmail ? (
            <Route path="/products" element={<Products />} />
            ) : (
            <Route path="/products" element={<Navigate to="/auth" />} />
          )}
          {getEmail ? (
            <Route path="/products/:productId" element={<ProductDetailsPage />} />
            ) : (
            <Route path="/products/:productId" element={<Navigate to="/auth" />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
