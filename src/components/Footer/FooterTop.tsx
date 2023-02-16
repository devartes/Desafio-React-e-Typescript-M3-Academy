import styles from "./styles/Footer.module.scss";
import FacebookIcon from "./assets/icons/FacebookIcon.svg";
import InstagramIcon from "./assets/icons/InstagramIcon.svg";
import TwitterIcon from "./assets/icons/TwitterIcon.svg";
import YoutubeIcon from "./assets/icons/YoutubeIcon.svg";
import LinkedInIcon from "./assets/icons/LinkedInIcon.svg";
import PlusIcon from "./assets/icons/PlusIcon.svg";
import { SubListContent } from "./SubListContent";

const FooterTop = () => {
  return (
    <div>
      <ul className={styles["Menu__List"]}>
        <ul className={styles["Menu__List__Group"]}>
          <input type="checkbox" id="FirstOption" />
          <label htmlFor="FirstOption">
            <img src={PlusIcon} alt="ícone de abrir menu" />
          </label>
          <li className={styles["Menu__List__Group__Title"]}>Institucional</li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Quem Somos</a>
          </li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Política de Privacidade</a>
          </li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Segurança</a>
          </li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Seja um Revendedor</a>
          </li>
        </ul>
        <ul className={styles["Menu__List__Group"]}>
          <input type="checkbox" id="SecondOption" />
          <label htmlFor="SecondOption">
            <img src={PlusIcon} alt="ícone de abrir menu" />
          </label>
          <li className={styles["Menu__List__Group__Title"]}>Dúvidas</li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Entrega</a>
          </li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Pagamento</a>
          </li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Trocas e Devoluções</a>
          </li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Dúvidas Frequentes</a>
          </li>
        </ul>
        <ul className={styles["Menu__List__Group"]}>
          <input type="checkbox" id="ThirdOption" />
          <label htmlFor="ThirdOption">
            <img src={PlusIcon} alt="ícone de abrir menu" />
          </label>
          <li className={styles["Menu__List__Group__Title"]}>Fale Conosco</li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Atendimento ao Consumidor</a>
          </li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="tel:114159-9504" target= "_blank" rel="noreferrer noopener">(11) 4159-9504</a>
          </li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="/" target= "_blank" rel="noreferrer noopener">Atendimento Online</a>
          </li>
          <li className={styles["Menu__List__Group__SubTitle"]}>
            <a href="tel:1199433-8825" target= "_blank" rel="noreferrer noopener">(11) 99433-8825</a>
          </li>
        </ul>
      </ul>
      <ul className={styles["Redes__Sociais"]}>
        <ul className={styles["Redes__Sociais__List"]}>
          <ul className={styles["Redes__Sociais__List__SocialMedia"]}>
            <li>
              <a href="/" target= "_blank" rel="noreferrer noopener">
                <img src={FacebookIcon} alt="ícone do Facebook" />
              </a>
            </li>
            <li>
              <a href="/" target= "_blank" rel="noreferrer noopener">
                <img src={InstagramIcon} alt="ícone do Instagram" />
              </a>
            </li>
            <li>
              <a href="/" target= "_blank" rel="noreferrer noopener">
                <img src={TwitterIcon} alt="ícone do Twitter" />
              </a>
            </li>
            <li>
              <a href="/" target= "_blank" rel="noreferrer noopener">
                <img src={YoutubeIcon} alt="ícone do Youtube" />
              </a>
            </li>
            <li>
              <a href="/" target= "_blank" rel="noreferrer noopener">
                <img src={LinkedInIcon} alt="ícone do LinkedIn" />
              </a>
            </li>
          </ul>
          <li className={styles["Redes__Sociais__List__Site"]}>
            <a href="https://www.loremipsum.com/" target="_blank"
          rel="noopener noreferrer">www.loremipsum.com</a>
          </li>
        </ul>
        <ul className={styles["Redes__Sociais__SubList"]}>
          <SubListContent />
        </ul>
      </ul>
    </div>
  );
};

export { FooterTop };
