import styles from "./index.module.scss";
import { useEffect, useState, useCallback } from "react";
import { ISearchResult, IQuery, Iuser } from "../../classes/index";
import SearchForm from "../SearchForm/index";
import DropdownList from "../Dropdown/index";
import Card from "../Card/index";
import Loader from "../Loader/index";
import Paging from "../Paging/index";
import axios from "axios";
import useQuery from "../../Hooks/useQuery";
import { useNavigate } from "react-router-dom";
import { gitHubUserApi, itemPerPage, labels } from "../../utilities/constants";

const Listings = (props: any) => {
  const fullDataObj = {
    user: {} as Iuser,
    gist: [],
  };
  let query = useQuery();
  let navigate = useNavigate();
  let filterObj = {} as IQuery;

  const q = query.get("q");
  const per_page = query.get("per_page");
  const p = query.get("p");
  const o = query.get("o");
  const s = query.get("s");

  if (q) filterObj.q = q;
  if (per_page) filterObj.per_page = per_page;
  if (p) filterObj.p = p;
  if (o) filterObj.o = o;
  if (s) filterObj.s = s;

  const [results, setResults] = useState<ISearchResult>(fullDataObj);
  const [erroMsg, setErroMsg] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //Handling Searh API, first call to get all users, and request for each user to get full details

  const handleSearch = useCallback(async () => {
    let gistsApiUrl = `${gitHubUserApi}/${q}/gists?q=${o ? "&order=" + o : ""}${
      s ? "&sort=" + s : ""
    }${p ? "&page=" + p : ""}&per_page=${per_page ? per_page : itemPerPage}`;

    const userPromiseArr: any[] = [
      axios.get(`${gitHubUserApi}/${q}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }),
      axios.get(gistsApiUrl, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }),
    ];

    const userPromiseArrOutput = await Promise.all(userPromiseArr);
    fullDataObj.user = userPromiseArrOutput[0]?.data;
    fullDataObj.gist = userPromiseArrOutput[1]?.data;

    //Query each gist  and get fork  details
    setIsLoading(false);
    return fullDataObj;
  }, [q, p, o, s, per_page]);

  //Dropdown change handler
  const filterHandler = (selected: any) => {
    const selection = JSON.parse(selected);
    filterObj = { ...filterObj, s: selection.sort, o: selection.order };
    updateQueryUrl();
  };

  //Paging handler
  const pagingHandler = (page: any) => {
    filterObj = { ...filterObj, p: page.selected + 1 };
    updateQueryUrl();
  };

  //Search happens only if there is query
  useEffect(() => {
    if (q) {
      (async () => {
        try {
          const data = await handleSearch();
          setResults(data);
        } catch (e: any) {
          setErroMsg(
            e?.response?.data?.message ? e?.response?.data?.message : e?.message
          );
          setIsLoading(false);
        }
      })();
    }
  }, [q, p, o, s, per_page, handleSearch]);

  //Pandling page loading functionality
  useEffect(() => {
    if (!q) {
      setIsLoading(false);
    }
  }, [q]);

  //Update nav url as per filter, test deploy
  const updateQueryUrl = () => {
    setIsLoading(true);
    const queryString = (
      Object.keys(filterObj) as Array<keyof typeof filterObj>
    )
      .map((key) => key + "=" + filterObj[key])
      .join("&");
    navigate({
      pathname: "/",
      search: queryString,
    });
  };

  //Loading icon display
  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <div className={`${styles.pageContent}`}>
        <div className={`container my-auto pt-3 pt-md-5`}>
          <div className="row">
            <div className="col-12 col-md-12 pb-3 pb-mb-5">
              {results?.user?.public_gists < 1 || erroMsg ? (
                erroMsg ? (
                  <p className={styles.error}>
                    {erroMsg.indexOf("exceeded") >= 0
                      ? labels.rateExceededError
                      : erroMsg}
                  </p>
                ) : (
                  <p className={`${styles.introTextSmall} mb-5`}>
                    {labels.noResultText}
                  </p>
                )
              ) : null}
              <SearchForm />
            </div>
            {results?.user?.public_gists ? (
              <>
                <div className="col-12 pt-4">
                  <div className={`row`}>
                    <div className="col-8">
                      <h2
                        className={styles.pageTitle}
                      >{`${results?.user?.public_gists} ${labels.users}`}</h2>
                    </div>
                    <div className="col-4 text-right">
                      <DropdownList changeHandler={filterHandler} />
                    </div>
                  </div>
                </div>
                <div className={`${styles.itemList} col-12 pt-4`}>
                  <div className={`row`}>
                    {results?.gist.map((item, index) => (
                      <div key={index} className={`col-12 mb-4`}>
                        <Card data={item} user={results?.user} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`col-12 pt-5 text-center`}>
                  <Paging
                    total={results?.user?.public_gists}
                    pagingHandler={pagingHandler}
                  />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Listings;
