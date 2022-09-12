import { Box, Stack, Typography } from '@mui/material'

import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'
import { FetchFromAPI } from '../Utils/FetchFromAPI'

function Feed() {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([])


  useEffect(() => {
    FetchFromAPI( `search?part=snippet&q=${selectedCategory}` )
    .then((data)=>{
      console.log("Inside Feed component",data.items)
      setVideos(data.items)
    })
  }, [selectedCategory])

  function changeCategory(name){
    setselectedCategory(name)
  }

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row", }, backgroundColor: 'black' }}>
      <Box sx={{ height: { sx: 'auto', md: 'auto' } ,borderRight: '1px solid #3d3d3d' }}>
        <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} changeCategory={changeCategory}/>
 
        
        <Typography className="copyright" variant="body2" sx={{ mt: '1.5', color: 'green' }}>Copyright 2022 YouTube</Typography>
      </Box>
      <Box p={2} sx = {{Height:'90vh',overflowY:'auto'}}>
        <Typography variant = "h4" fontWeight="bold" mb={2} sx={{color:'white'}} >
          {selectedCategory} <span style ={{color:'red'}} >Videos</span>
        </Typography>
        <Videos videos = {videos} />
      </Box>
    </Stack>
  )
}

export default Feed