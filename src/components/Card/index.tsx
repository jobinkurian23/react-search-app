import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "../Image/index";
import { labels, gitHubGistUrl } from "../../utilities/constants";
import axios from "axios";
import moment from "moment";
const Card = (props: any) => {
  const { data, user } = props;
  //Get the first filename of the Gist
  const fileArr = data?.files ? Object.keys(data?.files) : [];
  const tagsArr = Array.from(
    new Set(fileArr.map((item, index) => data?.files[item]?.language))
  );
  const [forkData, setForkData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(data.forks_url, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      });
      setForkData(response?.data?.slice(0, 3));
    })();
  }, [data?.forks_url]);

  const fileCount = fileArr?.length;
  let gistFileName = fileCount > 0 ? data?.files[fileArr[0]] : null;
  return (
    <>
      <div className={`${styles.Card}`}>
        <div className={"mb-3"}>
          {gistFileName ? (
            <h3>
              <a href={data?.html_url}>{gistFileName?.filename}</a>
            </h3>
          ) : null}

          <em>{`${user?.name}${user?.company ? `, ${user?.company}` : ""} ${
            user?.location ? `, ${user?.location}` : ""
          }`}</em>
          {user?.created_at ? (
            <p>{moment(user?.created_at).fromNow()}</p>
          ) : null}
          {data?.description ? (
            <p className={`${styles.small}`}>{`${data?.description}`}</p>
          ) : null}
        </div>
        {fileCount > 0 ? (
          <>
            <div className={`${styles.cardRow} row`}>
              <div className="col-6 col-md-4">
                <a href={data?.html_url}>
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    fill="#fff"
                    data-view-component="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z"
                    ></path>
                  </svg>
                  <label>
                    {fileCount} {labels.files}
                  </label>
                </a>
              </div>
              <div className={`${styles.tags} col-6 col-md-8`}>
                <a href={data?.html_url}>
                  {tagsArr.map((item, index) => {
                    return <span key={index}>{item}</span>;
                  })}
                </a>
              </div>
            </div>
            {forkData && forkData?.length > 0 ? (
              <div className={`${styles.cardRow} row`}>
                <div className="col-6 col-md-4">
                  <a href={`${data?.html_url}/forks`}>
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      fill="#fff"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      ></path>
                    </svg>
                    <label>{labels.forks}</label>
                  </a>
                </div>
                <div className="col-6 col-md-8">
                  {forkData?.map((item: any, index: number) => {
                    return (
                      <a
                        title={item?.owner?.login}
                        href={`${gitHubGistUrl}/${item?.owner?.login}`}
                        className={styles.thumb}
                        target={"_blank"}
                        rel={"noreferrer"}
                        key={index}
                      >
                        <Image
                          alt={item?.owner?.login}
                          imgSrc={item?.owner?.avatar_url}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : null}
            <div className={`${styles.cardRow} row`}>
              <div className="col-6 col-md-4">
                <a href={`${data?.html_url}#comments`}>
                  <svg
                    aria-hidden="true"
                    fill="#fff"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
                    ></path>
                  </svg>
                  <label>
                    {data?.comments} {labels.comments}
                  </label>
                </a>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default Card;
