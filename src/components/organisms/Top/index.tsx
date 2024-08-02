import React from "react";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";
// import Loading from "../../atoms/Loading";
import kehaiImg from "/public/images/kehai.png";
import classNames from "classnames";

type TopProps = {
  className?: string;
};

const Top: React.FC<TopProps> = ({ className = "" }) => {
  // const [imageLoaded, setImageLoaded] = useState(false);

  // const handleImageLoaded = () => {
  //   console.log("あああ");
  //   // Loadingアニメーションが消えるのを待つ
  //   setTimeout(() => {
  //     setImageLoaded(true);
  //   }, 300);
  // };

  return (
    <div
      id="Top"
      className={classNames(
        style.Top,
        className
        // !imageLoaded ? style["Top--beforeLoaded"] : ""
      )}
    >
      {/* <Loading isLoadedFirstImage={imageLoaded} /> */}
      <div className={style.Top__videoWrapper}>
        <p className={style.Top__titleBox}>
          <img
            width={560}
            src={kehaiImg}
            alt="気配を感じさせる手書き線"
            className={style.Top__lineImage}
          />
        </p>
        <div className={style.Top__videoFrame}>
          <video
            playsInline
            muted={true}
            autoPlay={true}
            loop={true}
            src="/video/topVisualVideo.mov"
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
  );
};

export default Top;
