import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Help from "../pages/help/Help";
import NotFound from "../pages/not-found/NotFound";
import LoginPage from "../pages/login/Login"; 
import Wishes from "../pages/wishes/Wishes";
import LoginForm from "../components/login/LoginForm";

const Router = ({ data }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home data={data} />} />
        <Route path="login-form" element={<LoginForm />} /> 
        <Route path="about" element={<About />} /> 
        <Route path="help" element={<Help />} /> 
        <Route path="wishes" element={<Wishes />} /> 
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<LoginPage />} /> 
    </Routes>
  );
};

export default Router;
