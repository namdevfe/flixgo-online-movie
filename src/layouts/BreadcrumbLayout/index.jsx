import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const BreadcrumbLayout = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Outlet />
      <Footer />
    </>
  );
};

export default BreadcrumbLayout;
