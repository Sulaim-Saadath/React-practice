import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div>
      <input type="text" value={search} name='search' onChange={(event) => {setSearch(event.target.value)}} />
    </div>
  )
}

export default Search
