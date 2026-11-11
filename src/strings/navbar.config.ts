import logo from "../assets/logo.png";
import location from "../assets/Icons/Location.jpg";
import telegram from "../assets/Icons/Telegram.jpg";
import instagram from "../assets/Icons/instagram.png"
import linkedin from "../assets/Icons/LinkedIn.jpg";

export const navbarStrings = {
  logo,

  menus: [
    { title: "خدمات آریوس", href: "#" },
    { title: "درباره ما", href: "#" },
    { title: "پروژه ها", href: "#" },
    { title: "همکاری با ما", href: "#" },
    { title: "تماس با ما", href: "#" },
  ],

  contacts: [
    { href: "#", icon: location },
    { href: "#", icon: telegram },
    { href: "#", icon: instagram },
    { href: "#", icon: linkedin },
  ],
};
