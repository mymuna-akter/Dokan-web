import React, { useState, useEffect } from "react";
import Footer from "../components/common/Footer";
import SideNav from "../components/common/SideNav";
// import LottieLoader from "./components/loader/LottieLoader";
import { BrowserRouter as Router } from "react-router-dom";

import "../styles.css";
import RouterView from "../RouterView";

const Home = () => {

  return (
    <div>
      <Router>
          <div>
            <div className="layout-part shadow-sm">
              <div className="sidebar-part">
                <SideNav />
              </div>
              <div className="content-part">
                <RouterView />
                <Footer />
              </div>
            </div>
          </div>
      </Router>
    </div>
  );
};

export default Home;
