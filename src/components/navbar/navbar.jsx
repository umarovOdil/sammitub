import { AccountCircle, Menu, Notifications, VideoCall  } from '@mui/icons-material'
import {Stack , Box, IconButton} from '@mui/material'
import {Link} from 'react-router-dom'
import {colors} from '../../constans/colors'

import SearchBar from '../search-bar/searchbar'

const Navbar = () => {
  return (
    <Stack
    alignItems={'center'}
    direction={'row'}
    justifyContent={'space-between'}
    p={2}
    sx={{position:'sticky' , top:0, zIndex:999 , background:'black'}}
    >
        <Box display={'flex'} alignItems={'center'} gap={1}>
         <IconButton>
           <Menu sx={{fontSize:'25px',color:'white'}}/>
         </IconButton>
        <Link to={'/'} className='logo'>
         Sammi<span>Tube</span>
        </Link>
        </Box>

        <SearchBar/>

        <Box alignItems={'center'}  gap={1} sx={{display:{xs:'none' , md:'flex'}}}>
          <IconButton >
          <VideoCall  sx={{fontSize:'25px',color:'white'}} />
         </IconButton>
          <IconButton>
          <Notifications sx={{fontSize:'25px',color:'white'}} />
         </IconButton >
          <IconButton>
          <AccountCircle sx={{fontSize:'25px',color:'white'}} />
         </IconButton>

        </Box>
    </Stack>
  )
}

export default Navbar