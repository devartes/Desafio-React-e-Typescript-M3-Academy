import styles from "./styles/Header.module.scss"
import React, { useEffect } from "react";

interface HeaderContentProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderContentBottom = ({menuIsVisible,setMenuIsVisible}: HeaderContentProps) => {

  useEffect(() => {
    if (window.innerWidth <= 1024){
      document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }
    if (window.innerWidth > 1024){
      document.body.style.overflowY = 'auto';
    }
  }, [menuIsVisible]);

  return (
    <>
    <div className={
      menuIsVisible
      ? `${styles['Header__Bottom']} ${styles['opened']}`
      : `${styles['Header__Bottom']}`
    
    } onClick={() => setMenuIsVisible(false)}  >
      <nav className={
        menuIsVisible
        ? `${styles["Nav__Bar"]} ${styles['opened']}`
        : `${styles["Nav__Bar"]}`

      } onClick={() => setMenuIsVisible(false)} >
        <ul className={`${menuIsVisible && 'opened'}`} onClick={() => setMenuIsVisible(false)}>
          <li>
            <a href="/" target= "_blank" rel="noreferrer noopener">Cursos</a>
          </li>
          <li>
            <a href="/" target= "_blank" rel="noreferrer noopener">Saiba Mais</a>
          </li>
          <li>
            <a href="/" target= "_blank" rel="noreferrer noopener">Institucionais</a>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export { HeaderContentBottom };
