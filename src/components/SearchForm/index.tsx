import Button from "../Button/index";
import TextInput from "../TextInput/index";
import { labels } from "../../utilities/constants";
import useQuery from "../../Hooks//useQuery";
const SearchForm = () => {
  let query = useQuery();
  const q = query.get("q");

  return (
    <form action="/">
      <div className="row">
        <div className="col-8">
          <TextInput
            placeHolder={q ? q : labels.searchPlaceholder}
            name={"q"}
          />
        </div>
        <div className="col-4 text-right">
          <Button text={labels.searchText} type={"submit"} />
        </div>
      </div>
    </form>
  );
};
export default SearchForm;
