import styles from "./index.module.scss";
import { sortOptons, labels } from "../../utilities/constants";
import { DropdownButton, Dropdown } from "react-bootstrap";
import useQuery from "../../Hooks//useQuery";

const DropdownList = (props: any) => {
  const { changeHandler, className = "" } = props;
  let query = useQuery();
  const o = query.get("o");
  const s = query.get("s");
  const q = query.get("q");
  if (!q) return null;

  const filterIndex = sortOptons.findIndex(
    (element) => element.order === (o ? o : "") && element.sort === (s ? s : "")
  );
  const filter = sortOptons[filterIndex];

  return (
    <DropdownButton
      id="dropdown-menu-align-end"
      align="end"
      title={`${labels?.sort} : ${filter ? filter?.label : ""}`}
      onSelect={changeHandler}
      className={`${styles.Dropdown} ${className} text-end`}
    >
      {sortOptons.map((option: any, index) => (
        <Dropdown.Item
          key={index}
          className={`item ${index == filterIndex ? styles.current : ""}`}
          eventKey={JSON.stringify(option)}
        >
          {" "}
          {option.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
export default DropdownList;
