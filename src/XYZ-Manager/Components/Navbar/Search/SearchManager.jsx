import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search() {
  return (
    <div className="search-manager">
          <SearchOutlinedIcon className="searchIcon-manager" />
          <input type="text" placeholder='Search' />
    </div>
  )
}

export default Search