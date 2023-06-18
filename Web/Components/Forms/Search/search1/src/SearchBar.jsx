import React from 'react'
import './SearchBar.css'
function SearchBar() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className='container'>
        <h2 className="navbar-brand"></h2>
        <form action="w-75 text-end">
          <input type="text" className='border text-white' placeholder='Search...' />
        </form>
      </div>
    </div>
  )
}
export default SearchBar