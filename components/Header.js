import headerStyles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/images/logo2.png";
import * as Scroll from "react-scroll";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import resume from "../public/images/melissa_Kepler_resume.pdf";

export default function Header(props){
  return (
    <nav id={headerStyles.nav}>
      <ul id={headerStyles.header}>
        <li className={headerStyles.item} tabIndex="0"><Link  activeClass="active" to="home" smooth={true} offset={-80}><Image alt="" src={logo} width="60x" height="50px" ></Image></Link></li>
        <li className={headerStyles.items} tabIndex="0"><Link to="about" smooth={true} offset={-80}>About</Link></li>
        <li className={headerStyles.items} tabIndex="0"><Link to="skills" smooth={true} offset={-80}>Skills</Link></li>
        <li className={headerStyles.items} tabIndex="0"><Link to="projects" smooth={true} offset={-80} isDynamic={true}>Projects</Link></li>
        <li className={headerStyles.items} tabIndex="0"><Link to="contact" smooth={true} offset={-80}>Contact</Link></li>
        <li className={headerStyles.items} tabIndex="0"><a href="/resume" target="_blank" rel="noreferrer">Resume</a></li>
        <li id={headerStyles.toggle}>
          <button className={headerStyles.item} onClick={props.onClick} type="button" aria-expanded="false" aria-label="hamburger menu">
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          <span className={headerStyles.hamburger}></span>
          </button>
        </li>
      </ul>
    </nav>
  )
}