import React from "react";
import styles from "./styles/Header.module.scss"
import Logo from "./assets/icons/logom3.svg";
import Cart from "./assets/icons/cart.svg";
import Icon__Menu__Closed from "./assets/icons/IconMenuClosed.svg";

interface HeaderContentProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderContentTop = ({menuIsVisible,setMenuIsVisible}: HeaderContentProps) => {
  const [search, setSearch]: [string, (search: string) => void] =
    React.useState("");

  return (
    <>
      <li className={styles["Logo"]}>
        <a href="/">
          <img src={Logo} alt="logo M3" />
        </a>
      </li>
      <input
        className={styles["Search__Bar"]}
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      ></input>
      <ul className={styles["Menu__Header__Top"]}>
        <li className={
          menuIsVisible
          ? `${styles['List__Login']} ${styles['opened']}`
          : `${styles['List__Login']}`
        } onClick={() => setMenuIsVisible(false)}>
          <a href="/" target= "_blank" rel="noreferrer noopener">Entrar</a>
          <button className={
            `${styles["Header__Button"]} ${styles["Closed"]}`
          } onClick={() => setMenuIsVisible(false)}  aria-label="fechar menu">
            <img src={Icon__Menu__Closed} alt="ícone do menu pra fechar" className={styles["Icon__Menu__Closed"]}/>
          </button>
        </li>
        <li className={styles["List__Cart"]}>
          <a href="/" target= "_blank" rel="noreferrer noopener" className={styles["cart__content--link"]}>
            <img src={Cart} alt="ícone de carrinho" />
          </a>
        </li>
      </ul>
    </>
  );
};

export { HeaderContentTop };
