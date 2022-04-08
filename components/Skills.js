import sectionStyles from "../styles/Section.module.css";
import Image from "next/image";
import bullet from "../public/images/bullet.png";

export default function Skills(){
  return (
    <div>
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title}>Skills</h2><span className={sectionStyles.spanright}></span>
      </div>
      <div className={sectionStyles.section} 
        id={sectionStyles.skills} 
        name="skills">
      <div id={sectionStyles.skillsContainer}>
        <ul>
          <li>JavaScript/ES6+</li>
          <li>React/Redux</li>
          <li>CSS/FlexBox</li>
          <li>Bootstrap</li>
          <li>npm</li>
          <li>Git/GitHub</li>
          <li>JavaScript/ES6+</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>JQuery</li>
          <li>Webpack/babel</li>
          <li>FirebaseDB/Auth</li>
          <li>Gulp/Grunt</li>
          <li>Heroku/AWS</li>
          <li>Cpanel</li>
        </ul>
        <ul>
          <li><h3>Artistic</h3></li>
          <li>Graphic Design</li>
          <li>Photo Editing</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Sketch</li>
          <li>3D Animation/Modeling</li>
        </ul>
        <ul>
          <li><h3>Working Knowledge:</h3></li>
          <li>Next.js</li>
          <li>Workbox/Service Workers/PWA</li>
          <li>Google Analytics</li>
          <li>Apollo/GraphQL</li>
          <li>Python/PHP</li>
          <li>Wordpress</li>
          <li>SEO practices</li>
        </ul>

      </div>
    </div>
    </div>
  )
}