import classNames from "classnames";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { worksItems } from "./data";
import WorksDrawer from "../WorksDrawer";
import { FadeInContainer } from "../../atoms/FadeInContainer";

export type WorksItemDataInterface = {
  title: string;
  id: string;
  createDate: string;
  category: string;
  urls: string[];
  text: string;
  textEnglish: string;
};

type WorkItemsProps = WorksItemDataInterface & {
  setIsDisplayed(): void;
  setDisplayedItem(): void;
};

const WorkItems: React.FC<WorkItemsProps> = ({
  title,
  id,
  category,
  urls,
  setIsDisplayed,
  setDisplayedItem,
}) => {
  return (
    <FadeInContainer>
      <li className={style.Works__item} onClick={setIsDisplayed}>
        <button
          className={style.Works__itemImageWrapper}
          onClick={setDisplayedItem}
        >
          {urls.map((url, index) =>
            index < 2 ? (
              <img
                key={index}
                src={url}
                alt={`${title}のサムネイル画像`}
                className={style.Works__itemImage}
              />
            ) : null
          )}
        </button>
        <div className={style.Works__itemInfo}>
          <p className={style.Works__itemInfoTexts}>
            <span className={style.Works__itemInfoId}>{id}</span>
            <span className={style.Works__itemInfoCategory}>{category}</span>
          </p>
          <h3 className={style.Works__itemInfoTitle}>{title}</h3>
        </div>
      </li>
    </FadeInContainer>
  );
};

const Works: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [displayedItem, setDisplayedItem] = useState<WorksItemDataInterface>({
    title: "-",
    id: "",
    createDate: "-",
    category: "-",
    urls: [],
    text: "-",
    textEnglish: "-",
  } as WorksItemDataInterface);

  return (
    <>
      <div id="works" className={classNames(style.Works)}>
        <h2 className={style.Works__title}>
          <span className={style.Works__titleBody}>Works</span>
        </h2>
        <ul className={style.Works__items}>
          {worksItems.map((item, index) => (
            <WorkItems
              key={index}
              {...item}
              setIsDisplayed={() => {
                setIsDisplayed(true);
              }}
              setDisplayedItem={() => {
                setDisplayedItem(item);
              }}
            />
          ))}
        </ul>
      </div>
      <WorksDrawer
        item={displayedItem}
        isDisplayed={isDisplayed}
        setIsDisplayed={() => {
          setIsDisplayed(false);
        }}
      />
    </>
  );
};

export default Works;
