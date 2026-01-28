import cn from "classnames";
import { SubmenuData } from "../../../data/data";

import styles from "./SubMenu.module.scss";
import { images } from "../../../assets/images";

export const SubMenu = ({ className }) => {
  return (
    <span className={cn(styles.submenu, className)}>
      <span className={styles.submenu__inner}>
        {SubmenuData.length
          ? SubmenuData.map((item, index) => (
              <a href="/#" className={styles.submenu__item} key={String(index)}>
                <span className={styles.submenu__item_text}>{item}</span>
                <i className={styles.submenu__item_icon}>
                  <img src={images.ArrowRightIcon} alt="Submenu arrow icon" />
                </i>
              </a>
            ))
          : null}
      </span>
    </span>
  );
};
