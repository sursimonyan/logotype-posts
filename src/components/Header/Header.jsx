import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";

import styles from "./Header.module.scss";
import { images } from "../../assets/images";

export const Header = ({ setSearch, search }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(200);

  const toggleSearch = () => {
    setIsOpenSearch((prev) => !prev);
  };

  const openeMenu = () => {
    setIsOpenMenu(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
    document.body.style.overflow = "visible";
  };

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      if (window.scrollY >= 200) {
        setLastScrollY(window.scrollY);
        setScrolled(true);
      } else {
        setShow(false);
        setScrolled(false);
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return (
    <header
      className={cn(styles.header, {
        [styles.header__show]: show,
        [styles.header__scrolled]: scrolled,
      })}
    >
      <div className={`${styles.header__top} container`}>
        <i className={styles.header__mobile_menu} onClick={openeMenu}>
          <img src={images.MobileMenuIcon} alt="mobile menu" />
        </i>
        <a href="/#" className={styles.header__logo}>
          <img src={images.Logo} srcSet={`${images.Logo2x} 2x`} alt="logo" />
        </a>
        <label className={styles.header__search}>
          <i className={styles.header__search_icon} onClick={toggleSearch}>
            {isOpenSearch ? (
              <img
                src={images.CloseIcon}
                className={styles.header__close_icon}
                onClick={() => setSearch("")}
                alt="close icon"
              />
            ) : (
              <img src={images.SearchIcon} alt="search icon" />
            )}
          </i>
          <div
            className={cn(styles.header__search_inner, {
              [styles.opened]: isOpenSearch,
            })}
          >
            <input
              type="text"
              className={styles.header__search_input}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </label>
      </div>
      <Nav isOpenMenu={isOpenMenu} closeMenu={closeMenu} />
    </header>
  );
};
