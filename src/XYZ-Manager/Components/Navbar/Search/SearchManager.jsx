import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

<<<<<<< HEAD
function Search() {
  return (
    <div className="search-manager">
          <SearchOutlinedIcon className="searchIcon-manager" />
          <input type="text" placeholder='Search' />
=======
function Search({value, handleTextChange}) {
  return (
    <div className="search-manager">
          <SearchOutlinedIcon className="searchIcon-manager" />
          <input value={value} onChange={handleTextChange} type="text" placeholder='Search' />
>>>>>>> f9a36a0117a8cf9abefd12968133e50afbc7bfd3
    </div>
  )
}

export default Search