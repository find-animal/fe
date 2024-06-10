import react from "react";
import styles from "./InputBox.styles.module.css";

export default function InputBox({type, text}) {
    return (
        <div className={styles.container}>
           <input className={styles.input} type={type} placeholder={text}/>
            <button className={styles.button} style={{display: type === 'password' && 'block'}}>Show</button>
        </div>
    )

}