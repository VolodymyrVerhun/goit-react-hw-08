import { useSelector, useDispatch } from "react-redux";

import style from "./SearchBox.module.css";

import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.search}>
      <label className={style.label} htmlFor="number">
        Find contacts by name
      </label>
      <input
        onChange={handleFilter}
        value={filter}
        className={style.input}
        type="text"
      />
    </div>
  );
}
