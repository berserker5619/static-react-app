import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input type='search' className='search' placeholder={placeholder}
        onChange={handleChange} />/* every time setState is called, render is recalled*/
)