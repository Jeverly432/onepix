import React from "react";
import Catalog from "./Catalog";
import Footer from "../Footer/Footer";
import "../../styles/app.scss";
import HeaderSidebar from "../Header/HeaderSidebar";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar__container">
      <HeaderSidebar />
      <Catalog />
      <Footer />
    </div>
  );
};

export default Sidebar;
