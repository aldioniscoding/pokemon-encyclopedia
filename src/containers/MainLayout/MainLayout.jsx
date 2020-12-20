import React from "react";

import Header from "../../components/Header/Header";
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="content-wrapper">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
