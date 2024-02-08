import React, { useState } from 'react'
import styled from 'styled-components';

const Input = ({placeholder}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);
  
  const searchGames = async (title) => {
    setLoading(true);
    if (title !== "") {
      const response = await fetch(`${API_URL}&search=${title}`);
      const data = await response.json();
      const sortedGames = data.results.sort((a, b) => b.ratings_count - a.ratings_count);
      setSearchedGames(sortedGames);
      numResults = parseInt(data.count);
    }
    setLoading(false);
  };

  return (
    <InputWrapper>
      <input
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        onSubmit={(e) => {
          if (e.key === "Enter") searchGames(searchTerm);
        }}
        type="text"
      />
    </InputWrapper>
  )
}

export default Input

const InputWrapper = styled.div`
.search-input {
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.15);
  min-width: 251px;
  &::placeholder {
    font-size: 15px;
    color: var(--clr-white);
  }
}`