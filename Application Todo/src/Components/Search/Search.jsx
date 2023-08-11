import React from 'react'
import styles from "./Search.module.css";
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../utils/slices/searchSlice';

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    dispatch(setSearch({search: searchValue}))
  }

  return (
    <div className={styles.search__box}>
      <input 
        type="text" 
        placeholder='Enter Todo Name? '
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search