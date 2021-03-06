import React, { useState } from "react";
import axios from "axios";
import Header from "./components/header/header.component";
import RequestForm from "./components/request-form/request-form.component";
import styles from "./app.module.css";
import { Status } from "./models/status";

const defaultRequests = [
  {
    id: 1,
    status: Status.Hidden,
    label: "Первый загрузчик",
  },
  {
    id: 2,
    status: Status.Hidden,
    label: "Второй загрузчик",
  },
  {
    id: 3,
    status: Status.Hidden,
    label: "Третий загрузчик",
  },
  {
    id: 4,
    status: Status.Hidden,
    label: "Четвертый загрузчик",
  },
  {
    id: 5,
    status: Status.Hidden,
    label: "Пятый загрузчик",
  },
];

const App: React.FC = () => {
  const [requests, setRequests] = useState(defaultRequests);

  async function handleRequestSend(id: number, url: string) {
    changeRequestStatusById(id, Status.Loading);
    sendRequest(url)
      .then(() => changeRequestStatusById(id, Status.Success))
      .catch(() => changeRequestStatusById(id, Status.Error))
      .finally(() => setClearTimeout(id));
  }

  function changeRequestStatusById(id: number, status: Status) {
    const request = requests.find((request) => request.id === id);
    if (!request) throw new Error("Request not found");

    request.status = status;
    setRequests([...requests]);
  }

  async function sendRequest(url: string) {
    return axios.get(url);
  }

  function setClearTimeout(id: number) {
    const timeout = 2000;
    setTimeout(() => changeRequestStatusById(id, Status.Hidden), timeout);
  }

  function hasPendingRequest(): boolean {
    const loading = requests.find(
      (request) => request.status === Status.Loading
    );
    return loading ? true : false;
  }

  return (
    <div>
      <Header loading={hasPendingRequest()} />
      <div className={styles.main}>
        {requests.map((request) => (
          <RequestForm
            label={request.label}
            status={request.status}
            key={request.id}
            onRequest={(url: string) => handleRequestSend(request.id, url)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
