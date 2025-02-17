import React, { useEffect, useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";

import { FadeInContainer } from "../../atoms/FadeInContainer";
import Vivus from "vivus";
import TopLine from "../../atoms/TopLine";

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
  const [isDisplayedVideo, setIsDisplayedVideo] = useState(false);
  const [isDisplayedExplore, setIsDisplayedExplore] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsDisplayed(true);
        new Vivus(
          "kfisvg",
          {
            type: "sync", // アニメーションタイプ (delayed, sync, oneByOne など)
            duration: 121, // アニメーションの長さ
            animTimingFunction: Vivus.EASE, // イージング
          },
          () => {
            setIsDisplayedVideo(true);
          }
        );
      }, 1000);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isDisplayedVideo) {
      // 映像が1秒かけてフェードインするので、それを待つ
      setTimeout(() => {
        setIsDisplayedExplore(true);
      }, 800);
    }
  }, [isDisplayedVideo]);

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
          <TopLine className={style.Top__lineImage} />
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
              className={classNames(
                style.Top__video,
                isDisplayedVideo ? style["Top__video--displayed"] : ""
              )}
            />
          </div>
          <p className={style.Top__text}>
            Studio K-Fi is a furniture design studio that
            <br />
            aims to bring a "good vibe" into everyday life through its designs.
          </p>
        </div>
        <ScrollIndicator
          className={classNames(
            style.Top__scrollIndicator,
            isDisplayedExplore ? style["Top__scrollIndicator--displayed"] : ""
          )}
        />
      </div>
    </FadeInContainer>
  );
};

export default Top;
