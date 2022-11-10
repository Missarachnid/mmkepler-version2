import headerStyles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/images/logo2.png";
import * as Scroll from "react-scroll";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

export default function Hamburger(props){
  return (
    <nav id={headerStyles.nav}>
      <ul id={headerStyles.header}>
        <li className={headerStyles.item} tabIndex="0"><Link  activeClass="active" to="home" smooth={true} offset={-80}><Image alt="" src={logo} width="60x" height="50px" ></Image></Link></li>

        <li id={headerStyles.toggle}>
          <button className={headerStyles.menu} onClick={props.onClick} type="button" aria-expanded="false" aria-label="hamburger menu">
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          </button>
        </li>
      </ul>
    </nav>
  )
}