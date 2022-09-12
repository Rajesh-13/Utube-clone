import { Box, Typography } from '@mui/material'

import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { FetchFromAPI } from '../Utils/FetchFromAPI'
import { useParams } from 'react-router-dom'

function SearchFeed() {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()


  useEffect(() => {
    FetchFromAPI( `search?part=snippet&q=${searchTerm}` )
    .then((data)=>{
      // console.log(data.items)
      setVideos(data.items)
    })
  }, [searchTerm])


  return (
      <Box p={2} sx = {{Height:'90vh',overflowY:'auto'}}>
        <Typography variant = "h4" fontWeight="bold" mb={2} sx={{color:'white'}} >
          Showing results for <span style ={{color:'red'}} >{searchTerm}</span>
        </Typography>
        <Videos videos = {videos} />
      </Box>
  )
}

export default SearchFeed