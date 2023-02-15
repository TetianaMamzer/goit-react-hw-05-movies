import { useState} from 'react';
import css from './SearchMovies.module.css';
import {ImSearch} from 'react-icons/im';

function Searchbar ({onSubmit}) {
 const [search, setSearch] = useState('')


const handleSubmit = (e) => {
  e.preventDefault();
  if(search.trim() === '') {
    return alert("Введіть назву картинки для пошуку")
  }
  onSubmit(search);
  setSearch('')
}

 return (
  <form onSubmit={handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormLabel}>
        <ImSearch/>
      </span>
    </button>
    <input
      value={search}
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={(e) => setSearch(e.target.value)}
      name='input'
    />
  </form>

 )
 }


export default Searchbar;
