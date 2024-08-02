import React from "react";
import style from "./style.module.scss";
import LogoMain from "../../atoms/LogoMain";
import classNames from "classnames";
import { Link } from "react-scroll";
import { ANCHOR_ITEMS, EXTERNAL_URLS } from "./data";

type SideColumnProps = {
  className?: string;
};

const SideColumn: React.FC<SideColumnProps> = ({ className = "" }) => {
  return (
    <div id="SideColumn" className={classNames(style.SideColumn, className)}>
      <a href="/" className={style.SideColumn__logoLink}>
        <LogoMain />
        <p className={style.SideColumn__logoLinkText}>
          furniture + architecture <br /> and creative <br /> design studio k-fi
        </p>
      </a>
      <div>
        <ul className={style.SideColumn__anchors}>
          {ANCHOR_ITEMS.map((item, index) =>
            item.id !== "top" ? (
              <li key={index}>
                <Link to={item.id} duration={600} smooth={true}>
                  {item.title}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <div className={style.SideColumn__separator} />
        <a href={EXTERNAL_URLS.WEB_SHOP} className={style.SideColumn__link}>
          Web shop
        </a>
        <a href={EXTERNAL_URLS.INSTAGRAM} className={style.SideColumn__link}>
          IG
        </a>
      </div>
    </div>
  );
};

export default SideColumn;
