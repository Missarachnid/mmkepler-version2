import contactStyles from "../styles/Contact.module.css";

export default function Success() {
  return (
    <div id={contactStyles.success}>
      <p>Your message was sent!</p>
      <p>Thanks</p>
    </div>
  )
}