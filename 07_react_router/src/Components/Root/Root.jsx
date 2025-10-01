import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="root__main">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
