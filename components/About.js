import sectionStyles from "../styles/Section.module.css";
import melissa from "../public/images/me.png";
import Image from "next/image";

export default function About(){
  return (
    <div>
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title}>About</h2><span className={sectionStyles.spanright}></span>
      </div>
    <div className={sectionStyles.section} 
      id={sectionStyles.about} 
      name="about">
        <div id={sectionStyles.spacer}>
        <Image src={melissa} alt="photo of Melissa Kepler photoshopped to look like it came from a space ship information display" width="100px" height="100px"/>
        <p>Greetings!</p>
        </div>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    </div>
  )
}