import MasterCard from "../../components/Footer/assets/icons/Master.svg";
import Visa from "../../components/Footer/assets/icons/Visa.svg";
import Diners from "../../components/Footer/assets/icons/Diners.svg";
import Elo from "../../components/Footer/assets/icons/Elo.svg";
import HiperCard from "../../components/Footer/assets/icons/Hiper.svg";
import Pagseguro from "../../components/Footer/assets/icons/Pagseguro.svg";
import Boleto from "../../components/Footer/assets/icons/Boleto.svg";
import VtexPci from "../../components/Footer/assets/icons/vtex-pci-200.svg";
import M3 from "../../components/Footer/assets/icons/m3.svg";
import Vtex from "../../components/Footer/assets/icons/vtex.svg";
import styles from "./styles/Footer.module.scss";
import { Icon } from "./ImageList/ImageList";

const FooterBottom = () => {
  return (
    <>
      <span className={styles["Razao__Social"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </span>
      <ul className={styles["Metodos__de__Pagamento"]}>
        <Icon src={MasterCard} className={styles["MasterCard"]} alt="ícone do cartão master card"/>
        <Icon src={Visa} className={styles["Visa"]} alt="ícone do cartão visa"/>
        <Icon src={Diners} className={styles["Diners"]} alt="ícone do cartão diners"/>
        <Icon src={Elo} className={styles["Elo"]} alt="ícone do cartão elo"/>
        <Icon src={HiperCard} className={styles["HiperCard"]} alt="ícone do cartão hipercard"/>
        <Icon src={Pagseguro} className={styles["Pagseguro"]} alt="ícone do meio de pagamento pagseguro"/>
        <Icon src={Boleto} className={styles["Boleto"]} alt="ícone do meio de pagamento boleto"/>      
        <span className={styles["Line"]}></span> 
        <Icon src={VtexPci} className={styles["VtexPci"]} alt="ícone do vtex pci"/>
      </ul>
      <ul className={styles["Autores"]}>
        <li>
          Powered by
          <img src={Vtex} className={styles["Vtex"]} alt="ícone da Vtex" />
        </li>
        <li>
          Developed by<img src={M3} className={styles["M3"]} alt="ícone do M3" />
        </li>
      </ul>
    </>
  );
};

export { FooterBottom };
