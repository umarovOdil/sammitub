import { Box } from '@mui/system'
import {Routes , Route} from 'react-router-dom'

import {Navbar , Search , Channel , VideoDetail , Main} from '../index'

const App = () => {
  return (
    <Box>

      <Navbar/>

        <Routes>

          <Route path='/' element={<Main/>}/>

          <Route path='/search/:id' element={<Search/>}/>
          <Route path='/channel/:id' element={<Channel/>}/>
          <Route path='/videoDetail/:id' element={<VideoDetail/>}/>

        </Routes>
    </Box>
  )
}

export default App
