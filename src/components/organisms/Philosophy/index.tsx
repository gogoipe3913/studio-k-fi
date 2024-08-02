import React, { useState } from "react";
import style from "./style.module.scss";
import { FadeInContainer } from "../../atoms/FadeInContainer";
import PhilosophyDrawer from "../PhilosophyDrawer";

const Philosophy: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <>
      <div id="philosophy" className={style.Philosophy}>
        <div className={style.Philosophy__contents}>
          <FadeInContainer>
            <h2 className={style.Philosophy__title}>
              <span className={style.Philosophy__titleBody}>Philosophy</span>
            </h2>
          </FadeInContainer>
          <FadeInContainer>
            <div className={style.Philosophy__texts}>
              <p className={style.Philosophy__text}>
                私たち人間は五感があり、
                <br /> 五感を持って世界を知覚しています。
                <br />
                モノを見て、触れ、叩いて音をだしたり、
                <br />
                または、口に入れたり、
                <br />
                五感を通して対象物を認識しているとき、
                <br /> 美しい、気持ちがいい、
                <br />
                おいしいといった感動も同時に持ち得ます。
              </p>
              <p className={style.Philosophy__textEnglish}>
                We humans have five senses, and we perceive
                <br />
                the world through them. By seeing, touching,
                <br />
                producing sounds by striking objects, or tasting,
                <br />
                we recognize objects through these senses.
                <br />
                Simultaneously, we can experience emotions such
                <br />
                as finding something beautiful, feeling pleasant,
                <br />
                or enjoying deliciousness.
              </p>
            </div>
            <div className={style.Philosophy__buttonWrapper}>
              <button
                className={style.Philosophy__button}
                onClick={() => {
                  setIsDisplayed(!isDisplayed);
                }}
              >
                <span className={style.Philosophy__buttonText}>View More</span>
                <span className={style.Philosophy__buttonCircle}>
                  <span className={style.Philosophy__buttonArrow} />
                </span>
              </button>
            </div>
          </FadeInContainer>
        </div>
      </div>
      <PhilosophyDrawer
        isDisplayed={isDisplayed}
        setIsDisplayed={() => {
          setIsDisplayed(false);
        }}
      />
    </>
  );
};

export default Philosophy;
