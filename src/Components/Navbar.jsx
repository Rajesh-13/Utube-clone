import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../Utils/constants'
import SearchBar from './SearchBar'

function Navbar() {
    return (
        <Stack direction='row' spcaing={2} p={2} alignItems='center' sx={{ position: 'sticky', background: 'black', top: '0', justifyContent: 'space-between' }}>
            <Link to = '/' style ={{display:'flex',alignItems:'center'}}>
                <img src = {logo} alt = "logo" height = {45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar