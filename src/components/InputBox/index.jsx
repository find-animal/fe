import styles from "./index.styles.module.css";
import {useState} from "react";

export default function InputBox({type, text, onInputChange, buttonText}) {
  const [inputType, setInputType] = useState(type);
  const handleClickShow = (e) => {
    e.preventDefault();
    setInputType(inputType === 'password' ? 'text' : 'password');
  }
  const handleChange = (e) => {
    onInputChange(e.target.value);
  }
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={inputType}
        placeholder={text}
        onChange={handleChange}
      />
      <button
        className={styles.button}
        onClick={handleClickShow}
      >
        {buttonText}
      </button>
    </div>
  );

}