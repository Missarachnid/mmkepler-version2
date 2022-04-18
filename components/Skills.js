import sectionStyles from "../styles/Section.module.css";
import Image from "next/image";
import planet from "../public/images/bullet.png";

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
        <div id={sectionStyles.skillsWrapper} >
        <ul>
          <li><h3>Title Here:</h3></li>
          <li><Image src={planet} alt="a teal planet bullet" /> JavaScript/ES6+</li>
          <li><Image src={planet} alt="a teal planet bullet" /> React/Redux</li>
          <li><Image src={planet} alt="a teal planet bullet" /> CSS/FlexBox</li>
          <li> <Image src={planet} alt="a teal planet bullet" />Bootstrap</li>
          <li><Image src={planet} alt="a teal planet bullet" /> npm</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Git/GitHub</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Node.js</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Express</li>
          <li><Image src={planet} alt="a teal planet bullet" /> MongoDB</li>
          <li><Image src={planet} alt="a teal planet bullet" /> JQuery</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Webpack/babel</li>
          <li><Image src={planet} alt="a teal planet bullet" /> FirebaseDB/Auth</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Gulp/Grunt</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Heroku/AWS</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Cpanel</li>
        </ul>
        
        <ul>
          <li><h3>Working Knowledge:</h3></li>
          <li><Image src={planet} alt="a teal planet bullet" /> Next.js</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Workbox/PWA</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Google Analytics</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Apollo/GraphQL</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Python/PHP</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Wordpress</li>
          <li><Image src={planet} alt="a teal planet bullet" /> SEO practices</li>
        </ul>

        <ul>
          <li><h3>Artistic</h3></li>
          <li><Image src={planet} alt="a teal planet bullet" /> Graphic Design</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Photo Editing</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Photoshop</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Illustrator</li>
          <li><Image src={planet} alt="a teal planet bullet" /> Sketch</li>
          <li><Image src={planet} alt="a teal planet bullet" /> 3D Animation/Modeling</li>
        </ul>
        </div>
      </div>
    </div>
    </div>
  )
}