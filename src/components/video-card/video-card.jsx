import { Avatar, Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import {colors} from '../../constans/colors'
import moment from 'moment'
import { Stack } from "@mui/system";
import { CheckCircle } from "@mui/icons-material";
import {Link} from 'react-router-dom'

const VideoCard = ({video}) => {

  console.log(video);
  
  return (
    <Card sx={{width:{xs:'100%' , sm:'350px' , md:'320px'} , boxShadow:'none' , borderRadius:'10px' , margin:{xs:'0px' , md:'10px'}, background:'transparent'}}>

      <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title}  sx={{width:{xs:'100%' , sm:'350px'}, height:'180px' , borderRadius:'10px'}} />

      <CardContent sx={{height:'70px' , position:'relative'}}>

          <Link to={`/videoDetail/${video.id.videoId}`} >
           
          <Box sx={{display:'flex' , gap:'7px' , alignItems:'center' , width:'100%'}}>
          <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
            <Typography variant="subtitle1" fontWeight={'bold'} sx={{color:'white'}}>
              {video?.snippet?.title.slice(0 , 50)}<span>...</span>
            </Typography>
          </Box>
            <Typography sx={{textAlign:'end'}}>
              {moment(video?.snippet?.publishedAt).fromNow()}
            </Typography>
            
            {/* <Typography variant="subtitle2" sx={{opacity:'.6' , color:'black'}}>
              {video?.snippet?.description.slice(0 , 60)}
            </Typography> */}
          </Link>

        <Link to={`/channel/${video?.snippet?.channelId}`}>
            <Stack direction={'row'} position={'absolute'} bottom={'10px'} alignItems={'center'} gap={'5px'}>

              

              {/* <Typography variant="subtitle2" color={'gray'}>
              {video?.snippet?.channelTitle}
              <CheckCircle sx={{fontSize:'12px' , color:'gray' , ml:'5px'}}/>
              </Typography> */}
              
            </Stack>
        </Link>
      </CardContent>

    </Card>
  )
}

export default VideoCard