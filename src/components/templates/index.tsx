import React from "react";
import Top from "../organisms/Top";
import Philosophy from "../organisms/Philosophy";
// import LookBack from "../organisms/LookBack";
// import Footer from "../organisms/Footer";
import ScrollTop from "../atoms/ScrollTop";
import style from "./style.module.scss";
import SideColumn from "../organisms/SideColumn";
import Works from "../organisms/Works";
import OrderFlow from "../organisms/OrderFlow";
import Footer from "../organisms/Footer";

const Templates: React.FC = () => {
  return (
    <>
      <div className={style.Templates}>
        <div className={style.Templates__noise}>
          <div className={style.Templates__noiseGif} />
        </div>
        <SideColumn className={style.Templates__sideColumn} />
        <ScrollTop />
        <div className={style.Templates__mainColumn}>
          <Top className={style.Templates__top} />
          <Philosophy />
          <Works />
          <OrderFlow />
          <Footer />
          {/* <About />
      <LookBack /> */}
        </div>
      </div>
    </>
  );
};

export default Templates;
