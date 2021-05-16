import React from "react";
import Input from "../input/input.component";
import Button from "../button/button.component";
import styles from "./request-form.module.css";

const RequestForm: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.input}>
      <Input />
    </div>
    <div className={styles.button}>
      <Button>Загрузить</Button>
    </div>
  </div>
);

export default RequestForm;
