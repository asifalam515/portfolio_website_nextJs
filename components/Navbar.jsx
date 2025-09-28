import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          ></Image>
        </a>
        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div>
          <a href="#contact">
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              alt="contact image"
              className="w-3"
            ></Image>{" "}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
