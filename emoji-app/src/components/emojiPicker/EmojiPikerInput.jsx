import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";
import styles from "./EmojiPicker.module.scss";

const EmojiPikerInput = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <div className={styles.inputContainer}>
        <input ref={inputRef} />
        <EmojiPicker ref={inputRef} />
      </div>
    </div>
  );
};

export default EmojiPikerInput;
