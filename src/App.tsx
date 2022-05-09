import React from "react";

import styles from "./styles/page.module.scss";
import Image from "./components/Image/index";
import SearchForm from "./components/SearchForm/index";
import Listings from "./components/Listings/index";
import { labels } from "./utilities/constants";
import useQuery from "./Hooks/useQuery";

export default function App() {
  let query = useQuery();
  const q = query.get("q");
  return (
    <>
      {!q ? (
        <div className={styles.pageContent}>
          <div className={`container my-auto ${styles.searchBlock}`}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <p className={`${styles.introText} mb-5`}>{labels.homeTitle}</p>
                <SearchForm />
              </div>
            </div>
          </div>

          <Image
            imgSrc={"../assets/images/globe.png"}
            className={styles.globeImg}
            alt={"globe"}
            width={"500"}
          />
        </div>
      ) : (
        <Listings />
      )}
    </>
  );
}
