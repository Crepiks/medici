import React, { useState } from "react";
import Input from "../input/input.component";
import Button from "../button/button.component";
import Loader from "../loader/loader.component";
import styles from "./request-form.module.css";
import { Status } from "../../models/status";

interface Props {
  status: Status;
  onRequest: (url: string) => Promise<void>;
}

const RequestForm: React.FC<Props> = ({
  status = Status.Hidden,
  onRequest = (f) => f,
}) => {
  const [url, setUrl] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input value={url} onInput={setUrl} />
      </div>
      <div className={styles.button}>
        <Button onClick={() => onRequest(url)}>Загрузить</Button>
      </div>
      <Loader status={status} />
    </div>
  );
};

export default RequestForm;
