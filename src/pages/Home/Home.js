import styles from "./Home.module.css";
import Task from "../../components/Task/Task";
import Navigation from "../../components/Navigation/Navigation";

const Home = ({ info, setInfo }) => {
  return (
    <>
      <Navigation />
      <div className={styles.layout}>
        {info.map((item) => (
          <Task
            goals={item.goal}
            done={item.done}
            key={item.id}
            change={setInfo}
            id={item.id}
            emoji={item.emoji}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
