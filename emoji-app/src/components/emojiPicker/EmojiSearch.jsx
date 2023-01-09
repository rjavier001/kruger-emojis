import styles from "./EmojiPicker.module.scss";
const EmojiSearch = ({ onSearch }) => {
  return <input className={styles.search} onChange={onSearch} />;
};

export default EmojiSearch;
