import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FunctionComponent<{}> = ({}) => {
  const [dropDown, setDropDown] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const burgerMenu = document.querySelector(".burger-menu");

    burgerMenu?.classList.add("clicked");

    if (dropDown && !loaded) setLoaded(true);
  }, [dropDown]);

  const handleDropDown = () => {
    const burgerMenu = document.querySelector(".burger-menu");

    if (!dropDown) {
      document.body.style.height = "100vh";
      document.body.style.width = "100%";
      document.body.style.overflowY = "hidden";
    } else {
      burgerMenu?.classList.remove("clicked");
      document.body.style.height = "auto";
      document.body.style.width = "auto";
      document.body.style.overflowY = "auto";
      setLoaded(false);
    }

    setDropDown(!dropDown);
  };

  return (
    <header
      className={`top-0 z-50 mx-auto bg-satin-linen ${
        dropDown ? "relative lg:h-screen" : "relative"
      }`}
    >
      <a className="skip-link text-dark-brown" href="#main">
        Skip to content
      </a>
      <nav className="flex flex-row w-full">
        <Link href="/" className="flex flex-col pl-2 py-2 lg:pl-5 lg:py-5">
          <Image
            src="/images/blackLogo.png"
            alt="three glasses of alcoholic drinks"
            width={125}
            height={125}
          />
        </Link>
        <div className="flex flex-col w-full">
          <p className="flex flex-row mx-auto my-auto font-cinzel text-2xl sm:text-4xl lg:text-7xl text-center font-semibold text-dark-brown">Virtual Bartender</p>
          <ul className="hidden h-full w-full items-center justify-evenly lg:flex lg:flex-row my-auto">
            <li className="flex px-12">
              <Link href="/about" rel="noreferrer" className="hover:underline font-lora text-xl text-dark-brown">
                About
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/get-inspired" rel="noreferrer" className="hover:underline font-lora text-xl text-dark-brown">
                Get Inspired
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="hover:underline font-lora text-xl text-dark-brown">
                Option2
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="hover:underline font-lora text-xl text-dark-brown">
                Option3
              </Link>
            </li>
          </ul>
        </div>
        {loaded && (
          <ul className="lg:hidden h-full w-full items-center justify-evenly flex flex-col my-auto bg-opacity-100 fixed bg-satin-linen">
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="hover:underline font-lora text-xl text-dark-brown">
                About
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/get-inspired" rel="noreferrer" className="hover:underline font-lora text-xl text-dark-brown">
                Get Inspired
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="hover:underline font-lora text-xl text-dark-brown">
                Option2
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="hover:underline font-lora text-xl text-dark-brown">
                Option3
              </Link>
            </li>
          </ul>
        )}
        <div className="burger-menu-wrapper my-auto flex h-full flex-col items-center justify-center px-5 lg:hidden">
          <button
            className="burger-menu z-30 cursor-pointer"
            onClick={handleDropDown}
            aria-expanded={dropDown}
            type="button"
            title="menu button"
          >
            {!dropDown && (
              <>
                <div className="line h-[10px] w-10 border-b-[3px] border-dark-brown"></div>
                <div className="line h-[10px] w-10 border-b-[3px] border-dark-brown"></div>
                <div className="line h-[10px] w-10 border-b-[3px] border-dark-brown"></div>
              </>
            )}
            {dropDown && (
              <>
                <div className="z-40 text-4xl text-dark-brown">X</div>
              </>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
