import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Create.module.css";
import { Link, useNavigate } from "react-router-dom";
import home from "../../assets/home.png";
import EmojiBox from "../../components/EmojiBox/EmojiBox";

const Create = ({ info, setInfo }) => {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState(
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/285/waving-hand_1f44b.png"
  );
  const [goals, setGoals] = useState(1);
  const [done, setDone] = useState(0);
  const [emojiBox, setEmojiBox] = useState(false);

  const openEmojiBox = () => {
    setEmojiBox(true);
  };
  const navigate = useNavigate();
  const submitHandler = () => {
    const newItem = {
      id: uuidv4(),
      emoji: emoji,
      name: name,
      goal: parseInt(goals),
      done: parseInt(done),
    };
    setDone("");
    setGoals("");
    setName("");
    setEmoji(
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/285/waving-hand_1f44b.png"
    );
    setInfo((prevState) => {
      const updatedTasks = prevState;
      updatedTasks.push(newItem);
      return updatedTasks;
    });

    navigate("/");
  };

  return (
    <>
      {emojiBox && <EmojiBox setEmojiBox={setEmojiBox} setEmoji={setEmoji} />}
      {!emojiBox && (
        <div className={styles.container}>
          <Link to="/" className={styles.back}>
            <img src={home} alt="Go Home" />
          </Link>
          <h1 className={styles.title}>Create Task</h1>
          <section>
            <div className={styles.emojiBox} onClick={openEmojiBox}>
              <img src={emoji} alt="edit" />
            </div>
            <h2 className={styles.label}>Choose Emoji</h2>
          </section>
          <section className={styles.inputLayout}>
            <div className={styles.inputTask}>
              <label htmlFor="name" className={styles.label}>
                Task Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></input>
            </div>
            <div className={styles.inputGoal}>
              <label htmlFor="goals" className={styles.label}>
                Set Goal <i>(Max: 12)</i>
              </label>
              <input
                id="goals"
                type="number"
                placeholder="goal"
                value={goals}
                onChange={(event) => setGoals(event.target.value)}
                max={12}
                min={1}
              ></input>
            </div>
            <div className={styles.inputProgress}>
              <label htmlFor="progress" className={styles.label}>
                Progress <i>(Max: 11)</i>
              </label>
              <input
                id="progress"
                type="number"
                placeholder="done"
                value={done}
                onChange={(event) => setDone(event.target.value)}
                max={11}
                min={1}
              ></input>
            </div>
            <div className={styles.inputButton}>
              <button onClick={submitHandler} className={styles.submitButton}>
                Submit
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Create;
