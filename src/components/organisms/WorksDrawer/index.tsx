import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { WorksItemDataInterface } from "../Works";
import LinkButton from "../../atoms/LinkButton";

type WorksDrawerContentsProps = Omit<WorksItemDataInterface, "id">;

type WorksDrawerProps = {
  item: WorksDrawerContentsProps;
  isDisplayed: boolean;
  setIsDisplayed(): void;
};

const WorksDrawerContents: React.FC<WorksDrawerContentsProps> = ({
  title,
  createDate,
  category,
  urls,
  text,
  textEnglish,
}) => {
  return (
    <div
      onWheel={(event) => {
        event.stopPropagation();
      }}
      className={style.WorksDrawer__contents}
    >
      <h3 className={style.WorksDrawer__title}>{title}</h3>
      <div className={style.WorksDrawer__separator} />
      <p className={style.WorksDrawer__createDate}>{createDate}</p>
      <p className={style.WorksDrawer__category}>{category}</p>
      <div className={style.WorksDrawer__separator} />
      <div className={style.WorksDrawer__body}>
        <div className={style.WorksDrawer__texts}>
          <p className={style.WorksDrawer__text}>{text}</p>
          <LinkButton
            href={"#"}
            text="View web shop"
            className={style.WorksDrawer__link}
          />
          <p className={style.WorksDrawer__textEnglish}>{textEnglish}</p>
        </div>
        <div className={style.WorksDrawer__images}>
          {urls.length !== 0 &&
            urls.map((url, index) => <img key={index} src={url} alt="" />)}
        </div>
      </div>
    </div>
  );
};

const WorksDrawer: React.FC<WorksDrawerProps> = ({
  item,
  isDisplayed = false,
  setIsDisplayed = () => {},
}) => {
  return (
    <div
      id="WorksDrawer"
      className={classNames(
        style.WorksDrawer,
        isDisplayed ? style["WorksDrawer--displayed"] : ""
      )}
    >
      <button
        onClick={setIsDisplayed}
        className={style.WorksDrawer__closeButton}
      >
        <span className={style.WorksDrawer__closeButtonLine} />
      </button>
      <WorksDrawerContents {...item} />
    </div>
  );
};

export default WorksDrawer;
