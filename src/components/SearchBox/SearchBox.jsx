import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.div}>
      <p className={s.p}>Find contacts by name</p>
      <input
        className={s.input}
        // key={props.filter.id}
        type="text"
        name="search"
        placeholder="Enter name"
        style={{ color: "rgb(168, 53, 53)" }}
        // value={props.filter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
