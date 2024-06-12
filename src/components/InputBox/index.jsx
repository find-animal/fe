import styles from "./index.styles.module.css";
import {useState} from "react";

export default function InputBox({type, text, onInputChange}) {
  const [inputType, setInputType] = useState(type);
  const handleClickShow = (e) => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }
  const handleChange = (e) => {
    onInputChange(e.target.value);
  }
  return (
    <div className={styles.container}>
      <input className={styles.input} type={inputType} placeholder={text} onChange={handleChange}/>
      <button className={styles.button} style={{display: type === 'password' && 'block'}}
              onClick={handleClickShow}>Show
      </button>
    </div>
  )

}