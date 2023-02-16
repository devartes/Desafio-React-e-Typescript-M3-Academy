import { BrowserRouter, Link } from "react-router-dom";
import Rotas from "../../config/routes";
import HomeIcon from "./assets/icons/HomeIcon.svg";
import ArrowPointToRight from "./assets/icons/ArrowPointToRight.svg";
import { NavLinkContent } from "./NavLink/NavLink";
import styles from "./styles/Main.module.scss";

const Main = () => {
  return (
    <BrowserRouter>
      <main>
        <nav className={styles["Navigation__Bar"]}>
          <ul className={styles["Navigation__Bar__Ul"]}>
            <li className={styles["Navigation__Bar__Ul__Li"]}>
              <Link to="/" className={styles["Navigation__Bar__Ul__Li__HomeLink"]}>
                <img src={HomeIcon} alt="ícone da página inicial" />
              </Link>
            </li>
            <li className={styles["Navigation__Bar__Ul__Li"]}>
              <img
                src={ArrowPointToRight}
                className={styles["Navigation__Bar__Ul__Li__ArrowPointToRight"]}
                alt="ícone de seta apontando para qual página está aberta"
              />
            </li>
            <li className={styles["Navigation__Bar__Ul__Li"]}>
              <Link to="/" className={styles["Navigation__Bar__Ul__Li__InstitucionalLink"]}>
                Institucional
              </Link>
            </li>
          </ul>
        </nav>
        <h1>institucional</h1>
        <section className={styles["Container"]}>
          <aside>
            <ul>
              <NavLinkContent to="/" text="Sobre" />
              <NavLinkContent to="/formadepagamento" text="Forma de Pagamento"/>
              <NavLinkContent to="/entrega" text="Entrega" />
              <NavLinkContent to="/trocaedevolucao" text="Troca e Devolução" />
              <NavLinkContent to="/segurancaeprivacidade" text="Segurança e Privacidade" />
              <NavLinkContent to="/contato" text="Contato" />
            </ul>
          </aside>
          <Rotas />
        </section>
      </main>
    </BrowserRouter>
  );
};

export { Main };
