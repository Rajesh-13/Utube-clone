import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
// import ChannelDetail from './Components/ChannelDetail';
// import SearchFeed from './Components/SearchFeed';
// import VideoDetail from './Components/VideoDetail';
// import Feed from './Components/Feed';
// import Navbar from './Components/Navbar';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './Components'  // export from index.js present inside Components folder


const App = () => (

  <BrowserRouter>
    <Box sx={{ 'backgroundColor': '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' exact element={<VideoDetail />} />
        <Route path='/channel/:id' exact element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);


export default App;
