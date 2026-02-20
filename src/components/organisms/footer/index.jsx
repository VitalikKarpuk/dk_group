import style from "./index.module.css";
import InstagramIcon from "./icons/InstagramIcon";
import TelegramIcon from "./icons/TelegramIcon";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/daria_kushnerova.psy?igsh=ZWdtM2M3Zjc0MnBs",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://t.me/dariakushnerova",
    label: "Telegram",
    Icon: TelegramIcon,
  },
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.inner}>
          <span className={style.label}>Связаться</span>
          <nav className={style.nav} aria-label="Социальные сети">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={style.iconLink}
                aria-label={label}
              >
                <Icon className={style.icon} />
              </a>
            ))}
          </nav>
          <span className={style.copyright}>© Я ЛИДЕР</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
