import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import LogoMain from "../LogoMain";

type LoadingProps = {
  isLoadedFirstImage: boolean;
};

const Loading: React.FC<LoadingProps> = ({ isLoadedFirstImage }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    if (isLoadedFirstImage) {
      setTimeout(() => {
        setIsDisplayed(false);
      }, 1000);
    }
  }, [isLoadedFirstImage]);

  return isDisplayed ? (
    <div
      className={classNames(
        style.Loading,
        isLoadedFirstImage ? style["Loading--end"] : ""
      )}
    >
      <div className={style.Loading__logoWrapper}>
        <div className={style.Loading__logo}>
          <LogoMain />
        </div>
        <p>Loading...</p>
      </div>
    </div>
  ) : null;
};

export default Loading;
