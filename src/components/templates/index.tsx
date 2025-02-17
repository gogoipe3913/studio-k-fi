import React, { useState } from "react";
import Top from "../organisms/Top";
import Philosophy from "../organisms/Philosophy";
import ScrollTop from "../atoms/ScrollTop";
import style from "./style.module.scss";
import SideColumn from "../organisms/SideColumn";
import Works from "../organisms/Works";
import OrderFlow from "../organisms/OrderFlow";
import Footer from "../organisms/Footer";
import Loading from "../atoms/Loading";

const Templates: React.FC = () => {
  // ファーストビューのステータス
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Loading isLoadedFirstImage={isLoaded} />
      <div className={style.Templates}>
        <div className={style.Templates__noise}>
          <div className={style.Templates__noiseGif} />
        </div>
        <SideColumn
          isLoaded={isLoaded}
          className={style.Templates__sideColumn}
        />
        <ScrollTop />
        <div className={style.Templates__mainColumn}>
          <Top
            isLoaded={isLoaded}
            onLoadData={() => {
              setIsLoaded(true);
            }}
            className={style.Templates__top}
          />
          <Philosophy />
          <Works />
          <OrderFlow />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Templates;
