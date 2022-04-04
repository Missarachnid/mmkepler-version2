import headerStyles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/images/logo2.png";

export default function Header(){
  return (
    <nav id={headerStyles.nav}>
      <ul id={headerStyles.header}>
        <li><a className={headerStyles.item} href="#home"><Image alt="mmkepler.com logo" src={logo} width="60x" height="50px" ></Image></a></li>
        <li className={headerStyles.items}><a href="#about">About</a></li>
        <li className={headerStyles.items}><a href="#skills">Skills</a></li>
        <li className={headerStyles.items}><a href="#projects">Projects</a></li>
        <li className={headerStyles.items}><a href="#contact">Contact</a></li>
        <li id={headerStyles.menu}>
          <a className={headerStyles.item}>
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          </a>
        </li>
      </ul>
    </nav>
  )
}