import styles from "./index.module.scss";
import { labels, itemPerPage } from "../../utilities/constants";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useQuery from "../../Hooks//useQuery";

const Paging = (props: any) => {
  const { total, pagingHandler } = props;
  let query = useQuery();
  const per_page = query.get("per_page");
  const p = query.get("p");

  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const count = Math.ceil(
      total / (per_page ? parseInt(per_page as string) : itemPerPage)
    );
    setPageCount(count);
    if (p) {
      setCurrentPage(parseInt(p as string) - 1);
    }
  }, [p, per_page, total]);
  return (
    <ReactPaginate
      breakLabel={labels.breakLabel}
      nextLabel={labels.next}
      onPageChange={pagingHandler}
      pageRangeDisplayed={3}
      activeClassName={styles.activeLink}
      className={styles.paginaton}
      pageCount={pageCount}
      forcePage={currentPage}
      previousLabel={labels.previous}
      renderOnZeroPageCount={undefined}
    />
  );
};
export default Paging;
