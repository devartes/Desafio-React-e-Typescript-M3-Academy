import styles from "./styles/Footer.module.scss";
import { FooterBottom } from "./FooterBottom";
import { FooterTop } from "./FooterTop";
import { Newsletter } from "./Newsletter";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <div className={styles["Footer__Top"]}>
        <FooterTop />
      </div>
      <div className={styles["Footer__Bottom"]}>
        <FooterBottom />
      </div>
    </footer>
  );
};

export { Footer };
