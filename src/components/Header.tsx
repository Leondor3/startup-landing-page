import { Sun, List } from "@phosphor-icons/react";
import NavigationDesktop from "../container/NavigationDesktop";
import logoSvg from "/images/logo/logo.svg";
import { useState, useEffect } from "react";
import NavigationMobile from "../container/NavigationMobile";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
        sticky
          ? "!fixed !z-[9999] shadow-sticky backdrop-blur-sm !transition !bg-primary !bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <div className="w-40 py-8 mr-14">
              <img className="w-full dark:block" src={logoSvg} />
            </div>
          </div>
          <NavigationDesktop />
          {isMobile && <NavigationMobile />}
          <div className="flex gap-4 w-full justify-end items-center">
            <button className="px-2 py-3 rounded-md ">
              <span className="text-white font-bold">Sign In</span>
            </button>
            <button className="bg-primary px-8 py-3 rounded-md w-32 hover:bg-opacity-90 hover:shadow-signUp">
              <span className="text-white font-bold text-base">Sign Up</span>
            </button>
            <Sun size={24} weight="bold" color="#fff" />
            <button
              className="md:hidden"
              onClick={() => setIsMobile(!isMobile)}
            >
              <List size={40} weight="bold" color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
