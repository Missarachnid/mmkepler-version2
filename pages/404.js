import errorStyles from "../styles/Error.module.css";

export default function custom404(){
  return (
    <div id={errorStyles.error}>
      <h1>Red Alert - This page does not exist!</h1>
      <h2 id={errorStyles.text}>404</h2>
    </div>
  )
}