import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import './searchbar.css'
type Props = {};
type SearchResults = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

function  SearchBar({}: Props) {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchError, setSearchError] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchPage, setSearchPage] = useState(1)
  const fetchData = (value : any) =>  {
    fetch(`https://api.github.com/search/users?q=${value}&page=${searchPage}`);
  }
  const handleSearch = (e : any) => {
    e.preventDefault()
    setSearchLoading(true)
    setSearchError('')
    fetchData(value)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setSearchResults(data.items)
        } else {
          setSearchError(data.message)
        }
        setSearchLoading(false)
      })
      .catch((err) => {
        setSearchError(err.message)
        setSearchLoading(false)
      })
  }
  return (
    <div className="App">
      <div className='search-bar-container'>
        <div className='input-wrapper'>
          <FaSearch id='search-icon'/>
          <input
            type='text'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div>SearchResults</div>
      </div>
    </div>
  )
}

export default SearchBar;