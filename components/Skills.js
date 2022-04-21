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
          <li><Image src={planet} alt="a teal planet list bullet" /> JavaScript/ES6+</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> React/Redux</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> CSS/FlexBox</li>
          <li> <Image src={planet} alt="a teal planet list bullet" />Bootstrap</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> npm</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Git/GitHub</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Node.js</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Express</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> MongoDB</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> JQuery</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Webpack/babel</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> FirebaseDB/Auth</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Gulp/Grunt</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Heroku/AWS</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Cpanel</li>
        </ul>
        
        <ul>
          <li><h3>Working Knowledge:</h3></li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Next.js</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Workbox/PWA</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Google Analytics</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Apollo/GraphQL</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Python/PHP</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Wordpress</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> SEO practices</li>
        </ul>

        <ul>
          <li><h3>Artistic</h3></li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Graphic Design</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Photo Editing</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Photoshop</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Illustrator</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> Sketch</li>
          <li><Image src={planet} alt="a teal planet list bullet" /> 3D Animation/Modeling</li>
        </ul>
        </div>
      </div>
    </div>
    </div>
  )
}