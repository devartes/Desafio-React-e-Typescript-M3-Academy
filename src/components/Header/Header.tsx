import { HeaderContentTop } from "./HeaderContentTop";
import styles from "./styles/Header.module.scss";
import { HeaderContentBottom } from "./HeaderContentBottom";
import { useState, useEffect } from "react";
import Icon__Menu from "./assets/icons/IconMenu.svg";

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const resizeWindow = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        document.body.style.overflowY = "auto";
      }
      if (window.innerWidth <= 1024 && menuIsVisible) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    });
  };

  useEffect(() => {
    resizeWindow();
  });

  return (
    <header>
      <ul className={styles["Header__Top"]}>
        <button
          className={styles["Header__Button"]}
          onClick={() => setMenuIsVisible(true)}
          aria-label="abrir menu"
        >
          <img
            src={Icon__Menu}
            alt="ícone de menu"
            className={styles["Icon__Menu"]}
          />
        </button>
        <HeaderContentTop
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      </ul>
      <HeaderContentBottom
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    </header>
  );
};

export { Header };
