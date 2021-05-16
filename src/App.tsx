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
  },
  {
    id: 2,
    status: Status.Hidden,
  },
  {
    id: 3,
    status: Status.Hidden,
  },
  {
    id: 4,
    status: Status.Hidden,
  },
  {
    id: 5,
    status: Status.Hidden,
  },
];

const App: React.FC = () => {
  const [requests, setRequests] = useState(defaultRequests);

  async function handleRequestSend(id: number, url: string) {
    changeRequestStatusById(id, Status.Loading);
    sendRequest(url)
      .then(() => changeRequestStatusById(id, Status.Success))
      .catch(() => changeRequestStatusById(id, Status.Error));
  }

  function changeRequestStatusById(id: number, status: Status) {
    const request = requests.find((request) => request.id === id);
    if (!request) throw new Error("Request not found");

    request.status = status;
    console.log(requests);
    setRequests([...requests]);
  }

  async function sendRequest(url: string) {
    return axios.get(url);
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
