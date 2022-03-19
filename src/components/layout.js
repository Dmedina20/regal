import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Children } from "react";
import PropTypes from "prop-types";
import { ToastProvider } from "react-toast-notifications";
const Layout = ({ children }) => {
  return (
    <>
      <ToastProvider>
        <div className="wrapper overflow-hidden">
          <Navigation />

          <div>{children}</div>
          <Footer />
        </div>
      </ToastProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menus: PropTypes.any,
};
export default Layout;
