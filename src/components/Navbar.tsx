import logo from "../assets/logo.png";
import type { navbarProps } from "../Type";
import { type FC } from "react";
const Navbar: FC<navbarProps> = (navbarProps) => {
  return (
    <nav
      className="absolute top-0 left-0 z-50 w-full h-24 px-14 bg-transparent flex items-center justify-between"
    >
      {/* right */}
      <div className="flex items-center gap-7">
        <a href="/">
          <img
            src={logo}
            alt="Arious"
            className="h-full w-20 object-contain"
          />
        </a>
        <div className="flex items-center gap-7 menu">
          {navbarProps.menus.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="flex items-center gap-2 whitespace-nowrap text-base font-bold transition-opacity  text-[#F3EFE8]"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      {/* left */}
      <div className="flex items-center px-4">
        {/* contacts */}
        <div className="flex items-center gap-6 border-l border-white/40 px-6 py-0.5">
          {navbarProps.contacts.map((contacts) => (
            <a
              key={contacts.alt}
              href={contacts.href}
              aria-label={contacts.alt}
              className="flex items-center justify-center transition-opacity contactsIcon"
            >
              <img
                src={contacts.icon}
                alt=""
                className="h-6 w-auto object-contain"
              />
            </a>
          ))}
          <a
            href="#language"
            className="text-[#F3EFE8] font-bold text-[22px] mt-3px"

          >
            EN
          </a>
        </div>
        {/* actions */}
        <div className="flex items-center gap-5 actions">
          <a
            href="#"
            className="whitespace-nowrap border-l border-white/40 pl-5 px-4 py-1.25 font-bold text-[18px] "
          >
            ورود
          </a>
          <a
            href="#"
            className="whitespace-nowrap font-bold text-[#f3efe8a1] text-[18px]"
          >
            ثبت نام
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
