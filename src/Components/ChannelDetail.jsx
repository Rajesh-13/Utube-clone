import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'
// import { ChannelCard } from './ChannelCard'
import  Videos  from './Videos'
import { FetchFromAPI } from '../Utils/FetchFromAPI'

function ChannelDetail() {
  const { id } = useParams()

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])


  console.log("In channelDetail",channelDetail)

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data.items[0]))

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items)
        console.log("--------------",data)
      })

  }, [id])

  console.log("+++++Videos+++++",videos)

  return (
    <Box minHeight='95vh'  >
      <Box >

        <div style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 30%, rgba(255,0,27,1) 100%)', zIndex: 10, height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetail} source = "Comming from ChannelDetails" marginTop='-110px'/>
      </Box>
      <Box display='flex' p ="2">
        <Box sx ={{mr:{sm:'100px'},color:'white'}}>REMOVE THIS</Box>
          <Videos videos = {videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail