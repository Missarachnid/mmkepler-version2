import sectionStyles from "../styles/Section.module.css";

export default function Contact(){
  return (
    <div>
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title}>Contact</h2><span className={sectionStyles.spanright}></span>
      </div>
    <div className={sectionStyles.section} 
      id={sectionStyles.contact} 
      name="contact">
        <div id={sectionStyles.spacer}>
        <p>Send a message to my planet!</p>
        </div>
      <div>
      <form>
        <input />
        <inuputs />
        <textarea></textarea>
      </form>
      </div>
    </div>
    </div>
  )
}