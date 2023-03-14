import { Stack , Box } from "@mui/system";
import {VideoCard , ChannelCard , Loader} from '../index'

const Videos = ({videos}) => {
  // if(!videos?.lenght) return <Loader/>

  return (
    <Stack width={'100%'} direction={'row'} alignItems={'center'} sx={{flexWrap:'wrap' , padding:'0px 10px'}}>

      {videos.map(item =>(

        <Box key={item.id.videoId} >
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard video={item}/>}
        </Box>

      ))}
      
    </Stack>
  )
}

export default Videos