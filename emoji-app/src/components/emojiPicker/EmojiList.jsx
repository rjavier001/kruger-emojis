import styles from "./EmojiPicker.module.scss";

const EmojiList = ({children}) => {
    return <div className={styles.emojisList}>{children}</div>;
}

export default EmojiList