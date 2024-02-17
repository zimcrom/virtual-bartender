import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FunctionComponent<{}> = ({}) => {
  return (
    <footer className="bg-satin-linen">
      <div className="flex flex-col lg:flex-row w-full justify-center">
        <Link href="/" className="flex flex-col w-full lg:w-1/2 justify-center">
          <Image
            src="/images/footerLogo.png"
            alt="three glasses of alcoholic drinks"
            width={125}
            height={125}
            className="mx-auto"
          />
        </Link>

        <ul className="flex flex-col w-full lg:w-1/2 justify-center py-5">
          <li className="flex text-center w-full justify-center py-2">
            <Link
              href="/about"
              rel="noreferrer"
              className="hover:underline font-lora text-xl text-dark-brown"
            >
              About
            </Link>
          </li>
          <li className="flex text-center w-full justify-center py-2">
            <Link
              href="/get-inspired"
              rel="noreferrer"
              className="hover:underline font-lora text-xl text-dark-brown"
            >
              Get Inspired
            </Link>
          </li>
          <li className="flex text-center w-full justify-center py-2">
            <Link
              href="/"
              rel="noreferrer"
              className="hover:underline font-lora text-xl text-dark-brown"
            >
              Option2
            </Link>
          </li>
          <li className="flex text-center w-full justify-center py-2">
            <Link
              href="/"
              rel="noreferrer"
              className="hover:underline font-lora text-xl text-dark-brown"
            >
              Option3
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
