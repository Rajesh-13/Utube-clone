import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SearchBar() {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{ borderRadius: 20, border: '2px solid black', pl: 2, boxShadow: 'none', mr: { sm: 5 } }} >
      <input className="search-bar" placeholder='Search..' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <SearchIcon />
      </IconButton>

    </Paper>
  )
}

export default SearchBar