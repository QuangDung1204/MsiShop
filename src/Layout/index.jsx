import Footer from "pages/user/theme/footer";
import Header from "pages/user/theme/header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
