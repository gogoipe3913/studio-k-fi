import classNames from "classnames";
import React from "react";
import style from "./style.module.scss";
import { EXTERNAL_URLS } from "../SideColumn/data";
import LinkButton from "../../atoms/LinkButton";
import { FadeInContainer } from "../../atoms/FadeInContainer";

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className = "" }) => (
  <FadeInContainer>
    <div className={classNames(style.Footer, className)}>
      <div className={style.Footer__leftColumn}>
        {/* <ul className={style.Footer__anchors}>
        {ANCHOR_ITEMS.map((item, index) => (
          <li key={index}>
            <Link to={item.id} duration={600} smooth={true}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul> */}
        <div className={style.Footer__companyInfo}>
          <img
            width={92}
            src="/images/logo.svg"
            alt="スタジオケーファイのロゴ"
          />
          <p className={style.Footer__infoDetail}>
            <a href="mailto:info@k-fi.jp">Mail: info@k-fi.com</a>
            <span>Address: 3-12-2, Minamidai, Nakano-ku, Tokyo</span>
          </p>
        </div>
        <p className={style.Footer__externalLinks}>
          <a href={EXTERNAL_URLS.WEB_SHOP}>Web shop</a>
          <a href={EXTERNAL_URLS.INSTAGRAM}>
            <img
              width={15}
              height={15}
              src="/images/instagram.svg"
              alt="インスタグラムアイコン"
              className={style.Footer__instagramIcon}
            />
          </a>
        </p>
        <p className={style.Footer__copyright}>
          © 2024 studio K-Fi. All rights reserved.
        </p>
      </div>
      <div className={style.Footer__rightColumn}>
        <img width={200} src="/images/sen.png" alt="手書き線" />
        <p className={style.Footer__contact}>
          <span>お仕事のご相談はこちらから</span>
          <LinkButton
            href="mailto:info@k-fi.jp"
            text="Contact"
            isBlack={true}
            className={style.Footer__contactLink}
          />
        </p>
      </div>
    </div>
  </FadeInContainer>
);

export default Footer;
