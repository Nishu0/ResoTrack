import styles from "./EmojiItem.module.css";
const EmojiItem = (props) => {
  return (
    <div className={styles.box} onClick={props.onClick}>
      <img src={props.emoji} alt={props.alt} />
    </div>
  );
};

export default EmojiItem;
