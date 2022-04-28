import footerStyles from "../styles/Footer.module.css";
import twitter from "../public/images/Twitter_Social_Icon_Circle_White.png";
import github from "../public/images/GitHub-Mark-Light-32px.png";
import Image from "next/image";

export default function Footer(){
  return (
    <footer id={footerStyles.footer}>
      <p id={footerStyles.copy}>©2022 Melissa Kepler</p>
      <div id={footerStyles.imageWrapper}>
        <a href="https://twitter.com/missarachnid" target="_blank" rel="noreferrer">
          <Image className={footerStyles.image} src={twitter} alt="Twitter logo" width={32} height={32}/>
        </a>
        <a href="https://github.com/Missarachnid" target="_blank" rel="noreferrer">
        <Image classame={footerStyles.image} src={github} alt="The GitHub Octocat logo" width={32} height={32} />
        </a>
      </div>
    </footer>
  );
}