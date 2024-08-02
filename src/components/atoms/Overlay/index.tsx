import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";

type OverlayProps = {
  isDisplayed: boolean;
};

const Overlay: React.FC<OverlayProps> = ({ isDisplayed = false }) => {
  return (
    <button
      className={classNames(
        style.Overlay,
        isDisplayed ? style["Overlay--displayed"] : ""
      )}
    />
  );
};

export default Overlay;
