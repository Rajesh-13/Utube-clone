import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture, demoChannelTitle } from '../Utils/constants'
import { Box } from '@mui/material'

function ChannelCard({ channelDetail,source,marginTop }) {
    console.log("In ChannelCard",source,channelDetail)
    return (
        <Box sx={{ width: { md: '320px', xs: '356px' },margin:'auto',height:'326px' ,boxShadow: 'none', borderRadius: '0', display:'flex',justifyContent:'center',alignItems:'center',marginTop }}>
            <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }} >
                    <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: '180px', width: '180px', border: '1px solid #e3e3e3', mb: 2 }} />
                    <Typography varient="h6" sx={{ color: 'white' }} >{channelDetail?.snippet?.channelTitle}
                        <CheckCircle sx={{ fontSize: 12, ml: '5px', position: 'relative', top: '1px', color: 'gray' }} />
                    </Typography>
                    <Typography>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</Typography>
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard