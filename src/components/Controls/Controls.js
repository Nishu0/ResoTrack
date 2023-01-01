import styles from "./Controls.module.css";
import add from "../../assets/Add.png";
import reduce from "../../assets/Reduce.png";
import remove from "../../assets/Delete.png";

const Controls = (props) => {
  const addHandler = () => {
    if (props.done === props.goals) {
      return;
    }
    if (props.done === props.goals - 1) {
      props.setCompleted(true);
    }
    props.change((prevState) => {
      let changedItem = prevState.map((item) => {
        if (item.id === props.id) {
          item.done = item.done + 1;
        }
        return item;
      });

      return changedItem;
    });
  };

  const reduceHandler = () => {
    if (props.done === 0) {
      return;
    }
    props.change((prevState) => {
      let changedItem = prevState.map((item) => {
        if (item.id === props.id) {
          item.done = item.done - 1;
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
    <div className={styles.controls}>
      <img src={add} alt="Add" onClick={addHandler} />
      <img src={remove} alt="Remove" onClick={removeHandler} />
      <img src={reduce} alt="Reduce" onClick={reduceHandler} />
    </div>
  );
};

export default Controls;
