import headerStyles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/images/logo2.png";
import * as Scroll from "react-scroll";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

export default function Header(props){
  console.log("props", props);
  return (
    <nav id={headerStyles.nav}>
      <ul id={headerStyles.header}>
        <li><Link className={headerStyles.item} activeClass="active" to="home" spy={true} smooth={true}><Image alt="mmkepler.com logo" src={logo} width="60x" height="50px" ></Image></Link></li>
        <li className={headerStyles.items}><Link to="about" spy={true} smooth={true} offset={-100}>About</Link></li>
        <li className={headerStyles.items}><Link to="skills" spy={true} smooth={true} offset={-100}>Skills</Link></li>
        <li className={headerStyles.items}><Link to="projects"  spy={true} smooth={true} offset={-100}>Projects</Link></li>
        <li className={headerStyles.items}><Link to="contact"  spy={true} smooth={true} offset={-100}>Contact</Link></li>
        <li id={headerStyles.toggle}>
          <button id={headerStyles.item} onClick={props.onClick}>
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          </button>
        </li>
      </ul>
    </nav>
  )
}