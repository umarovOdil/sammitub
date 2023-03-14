import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiService } from "../../services/api.service";
import { Box, Stack } from "@mui/system";
import ReactPlayer from "react-player";
import { Avatar, Chip, Typography } from "@mui/material";
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from "@mui/icons-material";
import {Loader , Videos} from "../";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setvideoDetail] = useState(null);
  const [realatedVideo, setRealatedVideo] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setvideoDetail(data.items[0]);

        const realatedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        )
        setRealatedVideo(realatedData.items)
        
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  

  if(!videoDetail?.snippet) return <Loader/>



  return (
    <Box minHeight={"90vh"}>
      <Box sx={{flexDirection:{xs:'column' , md:'row' }}} display="flex">
        <Box width={{xs:'100%' , md:'75%' }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            className='react-player'
          />
          <Box height={'100px'} sx={{overflowY:'scroll' , mt:'10px'}}>
          {videoDetail?.snippet?.tags.map((item , ind) => (
            <Chip
              label={item}
              deleteIcon={ <Tag/> }
              onDelete={() => {}}
              variant={"outlined"}
              key={ind}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" , color:'white'}}
            />
          ))}
          </Box>
          <Typography variant="h5" fontWeight={'bold'} p={2} sx={{color:'white'}}>
            {videoDetail?.snippet?.title}
          </Typography>
          <Typography variant="subtitle2" p={2} sx={{ opacity:'.7'}} color={'white'}>
            {videoDetail?.snippet?.description}
          </Typography>

          <Stack direction={'row'} gap={'20px'} m={'20px 10px'}>

            <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'5px'} color={'gray'}>
              <Visibility/>
              {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
            </Stack>
            <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'5px'} color={'gray'}>
              <FavoriteOutlined/>
              {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
            </Stack>
            <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'5px'} color={'gray'}>
              <MarkChatRead/>
              {parseInt(videoDetail?.statistics?.commentCount).toLocaleString()} comments
            </Stack>

            

          </Stack>

          <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
            <Stack direction={'row'}  margin={'50px 10px'} alignItems={'center'} gap={'10px'}>

              <Avatar src={videoDetail?.snippet?.thumbnails?.high?.url}/>

              <Typography variant="subtitle2" color={'gray'}>
              {videoDetail?.snippet?.channelTitle}
              <CheckCircle sx={{fontSize:'12px' , color:'gray' , ml:'5px'}}/>
              </Typography>
              
            </Stack>
            </Link>

        </Box>

        <Box width={{xs:'100%' , md:'25%' }} sx={{overflowY:'scroll'}}>
          <Videos videos={realatedVideo}/>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
