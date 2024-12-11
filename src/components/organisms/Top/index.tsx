import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";
// import Loading from "../../atoms/Loading";
import kehaiImg from "/public/images/kehai.png";
import classNames from "classnames";
import { FadeInContainer } from "../../atoms/FadeInContainer";

type TopProps = {
  isLoaded: boolean;
  onLoadData?(): void;
  className?: string;
};

const Top: React.FC<TopProps> = ({
  isLoaded,
  onLoadData = () => {},
  className = "",
}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsDisplayed(true);
      }, 1000);
    }
  }, [isLoaded]);

  return (
    <FadeInContainer>
      <div
        id="Top"
        className={classNames(
          style.Top,
          isDisplayed ? style["Top--displayed"] : "",
          className
        )}
      >
        <div className={style.Top__videoWrapper}>
          <img
            width={560}
            src={kehaiImg}
            alt="気配を感じさせる手書き線"
            className={style.Top__lineImage}
          />

          <div className={style.Top__videoFrame}>
            <video
              playsInline
              muted={true}
              autoPlay={true}
              loop={true}
              src="/video/topVisualVideo.mov"
              onLoadedData={() => {
                setTimeout(() => {
                  onLoadData();
                  // デフォルトで1秒はローディングする
                }, 1000);
              }}
              className={style.Top__video}
            />
          </div>
          <p className={style.Top__text}>
            Studio K-Fi is a furniture design studio that
            <br />
            aims to bring a "good vibe" into everyday life through its designs.
          </p>
        </div>
        <ScrollIndicator className={style.Top__scrollIndicator} />
      </div>
    </FadeInContainer>
  );
};

export default Top;
