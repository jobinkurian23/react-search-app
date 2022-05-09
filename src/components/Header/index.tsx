import React from "react";
import styles from "./index.module.scss";
import Image from "../Image/index";
export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <nav className="navbar static-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image
              alt={"Logo"}
              imgSrc={`/assets/icons/logo.png`}
              width={"36"}
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
