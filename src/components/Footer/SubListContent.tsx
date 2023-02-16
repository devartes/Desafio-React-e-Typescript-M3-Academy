import ArrowIcon from "./assets/icons/ArrowIcon.svg";
import WhatsAppIcon from "./assets/icons/WhatsAppIcon.svg";

const SubListContent = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <li>
        <a
          href="https://wa.me/0000000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={WhatsAppIcon} alt="ícone do WhatsApp" />
        </a>
      </li>
      <li>
          <button
            style={{
              background: "transparent",
              padding: 0,
              border: 0,
              cursor: "pointer",
            }}
            onClick={scrollUp}
          >
            <img src={ArrowIcon} alt="ir para o topo da página" />
          </button>
      </li>
    </>
  );
};

export { SubListContent };
