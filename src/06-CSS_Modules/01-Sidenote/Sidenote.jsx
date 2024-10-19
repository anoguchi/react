import styles from "./App.css";

function Sidenote({ title, children }) {
  return (
    <aside className={styles.wrapper}>
      <h3 className={styles.title}></h3>
      <p>{children}</p>
    </aside>
  );
}
console.log(styles);

export default Sidenote;
