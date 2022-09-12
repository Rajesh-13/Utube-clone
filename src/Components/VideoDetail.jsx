import { Box, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FetchFromAPI } from '../Utils/FetchFromAPI'
import Videos from './Videos'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'
import Loader from './Loader'

function VideoDetail() {

  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchResults = async() =>{
    const data = await FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    setVideoDetail(data.items[0]);

    const relatedVideo = await FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    setVideos(relatedVideo.items);
    }
    fetchResults();
  }, [id])

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1} >
          <Box color='white' sx={{ width: '100%', position: 'sticky', top: '86px' }}>

            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Typography varient="h5" sx={{ color: 'white', fontWeight: 'bold' }} p={2} >{title}</Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: 'white' }} py={1} px={2} >
              <Link to={`channel/${channelId}`}  >
                <Typography varient={{ sm: 'subtitle1', md: 'h6' }} color='white'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: 12, ml: '5px', position: 'relative', top: '1px', color: 'gray' }} />
                </Typography>
              </Link>
              <Stack direction='row' sx={{ alignItems: 'center' }}>
                <Typography varient='body1' sx={{ opacity: 0.7 }} >{parseInt(viewCount).toLocaleString()} views</Typography>
                <Typography ml={2} varient='body1' sx={{ opacity: 0.7 }} >{parseInt(likeCount).toLocaleString()} likes</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} alignItems='center' justifyContent='center' py={{ md: 1, xs: 5 }} >
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail