import React from "react";
import styles from "./index.module.scss";
import { labels } from "../../utilities/constants";

export default function Footer() {
  return (
    <footer id="footer">
      <div className={`container py-3 ${styles.footer}`}>
        <p>{labels.copyRight}</p>
      </div>
    </footer>
  );
}
