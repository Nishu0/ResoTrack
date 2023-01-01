import styles from "./CompletedTask.module.css";
import reset from "../../assets/reset.png";
import remove from "../../assets/Delete.png";
const CompletedTask = (props) => {
  const resetHandler = () => {
    props.setCompleted(false);
    props.change((prevState) => {
      let changedItem = prevState.map((item) => {
        if (item.id === props.id) {
          item.done = 0;
        }
        return item;
      });

      return changedItem;
    });
  };

  const removeHandler = () => {
    props.change((prevState) => {
      let changedItem = prevState.filter((item) => item.id !== props.id);
      return changedItem;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.emojiBox}>
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/285/party-popper_1f389.png"
          alt="Celebrate"
        />
      </div>
      <h3>Congratulations!!</h3>
      <div className={styles.controls}>
        <img src={remove} alt="Remove" onClick={removeHandler} />
        <img src={reset} alt="Reset" onClick={resetHandler} />
      </div>
    </div>
  );
};

export default CompletedTask;
