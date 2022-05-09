import React, { useEffect } from "react";

import Header from "../Header/index";
import Footer from "../Footer/index";
import { labels } from "../../utilities/constants";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
