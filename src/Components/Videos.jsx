import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import Loader from './Loader'

function Videos({ videos, direction }) {
  if (!videos?.length) return <Loader />;
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2} >
      {videos.map((items, index) => (
        <React.Fragment key = {index}>
          {items?.id?.videoId && <Box><VideoCard video={items} /></Box>}
          {items?.id?.channelId && <Box><ChannelCard channelDetail={items} source="Comming from Videos" /></Box>}
          {/* {items?.id?.playlistId && <div style = {{border:'2px solid yellow',color:'white'}}>Playlist</div> } */}
        </React.Fragment>
      ))}
    </Stack>
  )
}

export default Videos