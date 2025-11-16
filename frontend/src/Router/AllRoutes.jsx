import React from "react";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Profile from "../components/Profile";
import OrderDetails from "../pages/OrderDetails";
import Payment from "../pages/Payment";
import PaymentForm from "../pages/PaymentForm";
import Login from "../pages/LogIn";
import AdminLogin from "../pages/AdminLogIn";
import Registration from "../pages/Registration";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import ShippingDetails from "../pages/ShippingDetails";
import { Routes, Route } from "react-router-dom";
import { Privateroute, Privaterouteadmin } from "../Router/ProtectedRoute";
import Admin from "../pages/Admin";
import NotFound from "../components/NotFound";
import ChatPage from "../pages/ChatPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<Registration />} />

        {/* ChatBot Route */}
        <Route path="/chat" element={<ChatPage />} />

        {/* User Protected Routes */}
        <Route path="/user" element={<Privateroute />}>
          <Route path="cart" element={<Cart />} />
          <Route path="save-address" element={<ShippingDetails />} />
          <Route path="order-details" element={<OrderDetails />} />
          <Route path="payment-success" element={<Payment />} />
          <Route path="make-payment" element={<PaymentForm />} />
          <Route path="profile/:userid" element={<Profile />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route path="/admin" element={<Privaterouteadmin />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="/admin-login" element={<AdminLogin />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
