import cn from "classnames";
import { SubMenu } from "./SubMenu/SubMenu";
import { MenuData } from "../../data/data";

import styles from "./Nav.module.scss";
import { images } from "../../assets/images";

export const Nav = ({ isOpenMenu, closeMenu }) => {
  return (
    <nav className={cn(styles.nav, { [styles.open]: isOpenMenu })}>
      <div className={cn(styles.nav__inner, "container")}>
        <div className={styles.nav__mobile_menu}>
          <span className={styles.nav__menu_logo}>
            <img src={images.Logo} srcSet={`${images.Logo2x} 2x`} alt="logo" />
          </span>
          <i className={styles.nav__menu_close} onClick={closeMenu}>
            <img src={images.CloseIcon} alt="close icon" />
          </i>
        </div>
        {MenuData.length
          ? MenuData.map((item, index) => (
              <span className={styles.nav__item} key={String(index)}>
                <a href="/#" className={styles.nav__item_inner}>
                  {item}
                  <i className={styles.nav__item_icon}>
                    <img src={images.ArrowDownIcon} alt="arrow down icon" />
                  </i>
                </a>
                <SubMenu className={styles.nav__submenu} />
              </span>
            ))
          : null}
      </div>
    </nav>
  );
};
