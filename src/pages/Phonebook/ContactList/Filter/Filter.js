import { useDispatch } from 'react-redux';
import { changeFilterAction } from 'redux/filter/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>

      <input
        onChange={changeFilter}
        autoComplete="off"
        type="text"
        name="filter"
        placeholder="search"
      />
    </>
  );
};
