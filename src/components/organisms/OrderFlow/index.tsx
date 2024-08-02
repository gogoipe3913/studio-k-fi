import React, { Fragment } from "react";
import style from "./style.module.scss";
import { FadeInContainer } from "../../atoms/FadeInContainer";
import { OrderFlowItems } from "./data";

export type OrderFlowItemDataInterface = {
  number: string;
  titleEnglish: string;
  title: string;
  text: string;
};

const OrderFlow: React.FC = () => {
  return (
    <>
      <div id="orderFlow" className={style.OrderFlow}>
        <div className={style.OrderFlow__contents}>
          <FadeInContainer>
            <h2 className={style.OrderFlow__title}>
              <span className={style.OrderFlow__titleBody}>OrderFlow</span>
            </h2>
          </FadeInContainer>
          <FadeInContainer>
            <div className={style.OrderFlow__texts}>
              <p className={style.OrderFlow__text}>
                studio K-Fi では、オンラインショップで展開している家具の他にも
                <br />
                オーダーメイド家具の製作/インテリアディレクション/内装を承っています。
                <br />
                ご依頼の際は以下のフローとなりますので、まずはお気軽にご相談ください。
              </p>
              {OrderFlowItems.map((item, index) => (
                <Fragment key={index}>
                  <div className={style.OrderFlow__separator} />
                  <h3 className={style.OrderFlow__sectionTitle}>
                    <span className={style.OrderFlow__sectionNumber}>
                      {item.number}
                    </span>
                    <span className={style.OrderFlow__sectionTextEnglish}>
                      {item.titleEnglish}
                    </span>
                    <span className={style.OrderFlow__sectionText}>
                      {item.title}
                    </span>
                  </h3>
                  <p className={style.OrderFlow__sectionContentText}>
                    {item.text}
                  </p>
                </Fragment>
              ))}
            </div>
          </FadeInContainer>
        </div>
      </div>
    </>
  );
};

export default OrderFlow;
