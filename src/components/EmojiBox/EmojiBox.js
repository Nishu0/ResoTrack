import styles from "./EmojiBox.module.css";
import EmojiData from "../../data/EmojiData";
import EmojiItem from "./EmojiItem";
import { v4 as uuidv4 } from "uuid";
const EmojiBox = (props) => {
  const images = Object.entries(EmojiData);

  const selectHandler = (event) => {
    props.setEmoji(event.target.currentSrc);
    props.setEmojiBox(false);
  };

  return (
    <div className={styles.container}>
      {images.map((image) => {
        return (
          <EmojiItem
            emoji={image[1]}
            alt={image[0]}
            onClick={selectHandler}
            key={uuidv4()}
          />
        );
      })}
    </div>
  );
};

export default EmojiBox;
