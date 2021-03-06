import React from "react";
import Loader from "../loader/loader.component";
import styles from "./header.module.css";

interface Props {
  loading?: boolean;
}

const Header: React.FC<Props> = ({ loading = false }) => (
  <header className={styles.container}>
    <span className={styles.logo}>Medici</span>
    {loading && <Loader size="large" />}
  </header>
);

export default Header;
