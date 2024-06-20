import ToDoApp from "./components/todoapp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <ToDoApp />
    </main>
  );
}
