import React from 'react'
import styled from 'styled-components'

const Search = ({handleSearch}) => {
  return (
    <SearchStyle>
      <input type="text" onChange={handleSearch} placeholder=".... Search"></input>
      
    </SearchStyle>
  )
}

export default Search

const SearchStyle = styled.div`

  margin: 20px;
  display:flex
  width: 30%;
  text-align:center;
  border: 1px solid black;
  color: white; 
  background-color: green;

`