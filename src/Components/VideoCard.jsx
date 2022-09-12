import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoProfilePicture, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../Utils/constants'

function VideoCard({ video: { id: { videoId }, snippet } }) {
    // console.log(videoId, snippet)
    return (
        <Card sx ={{width: {xs:'100%',sm:'358px' ,md:'320px'}, boxShadow:'none', borderRadius:'0'}} >
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ height: 180, width: {xs:'100%',sm:'358px',md:'320px'} }} />
                <CardContent sx={{ backgroundColor: '#1e1e1e', height: 106 }}>
                    <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
                        <Typography variant="subtitle2" fontWeight='bold' color='white'>
                            {snippet?.title.slice(0,60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `channel/${snippet.channelId}` : demoChannelUrl}>
                        <Typography variant="subtitle3" fontWeight='bold' color='gray'>
                            {snippet?.channelTitle.slice(0,60)}
                            <CheckCircle sx={{fontSize:12, ml:'5px', position:'relative',top:'1px'}}/> 
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard