import styles from "./index.styles.module.css";

export default function InputBox({ type, text, onInputChange }) {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={type}
        placeholder={text}
        onChange={handleChange}
      />
    </div>
  );
}
