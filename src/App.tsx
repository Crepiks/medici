import Header from "./components/header/header.component";
import RequestForm from "./components/request-form/request-form.component";
import styles from "./app.module.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <RequestForm />
      </div>
    </div>
  );
}
