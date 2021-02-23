import './SearchBar.scss';
import '../styles/helpers.scss';

function SearchBar() {
  return (
    <div className='SearchBar'>
      <label className='sr-only' htmlFor='search-input'>
        Please enter your IP address:
      </label>
      <input
        className='SearchBar__input'
        id='search-input'
        type='text'
        placeholder='Search for any IP address or domain'
      />
      <button className='SearchBar__button' aria-label='Submit'></button>
    </div>
  );
}

export default SearchBar;
