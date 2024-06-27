import Accordeon from "./components/accordeon";
import SectionWithObserver from "./components/sectionWithObserver";
import ToDoApp from "./components/todoapp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Accordeon />
        <ToDoApp />
        <div style={{height: '1000px'}}></div>
        <SectionWithObserver>
          <h2 className="animating">Section heading</h2>
          <p className="animating">useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it. In Strict Mode, React will call your initializer function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your initializer function is pure (as it should be), this should not affect the behavior. The result from one of the calls will be ignored. </p>
        </SectionWithObserver>
        <div style={{height: '1000px'}}></div>
    </main>
  );
}
