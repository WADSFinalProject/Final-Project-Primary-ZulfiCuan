import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search() {
  return (
    <div className="search">
          <SearchOutlinedIcon className="searchIcon" />
          <input type="text" placeholder='Search' />
    </div>
  )
}

export default Search
