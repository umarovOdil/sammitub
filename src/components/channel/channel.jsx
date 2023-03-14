import { Link , useParams } from "react-router-dom"
import { useEffect , useState } from "react"
import { Box } from "@mui/system"
import {ChannelCard , Videos} from "../"
import {ApiService} from '../../services/api.service'
const Channel = () => {

  const {id} = useParams()

  const [channelDetail, setchannelDetail] = useState()
  const [videos, setVideos] = useState([])

  useEffect(() =>{
    const getData = async () =>{
      try{
        const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setchannelDetail(dataChannelDetail.items[0])

        const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        setVideos(dataVideo.items)
      }
      catch(error){
        console.log(error);
      }
    }

    getData();
  } , [id])

  console.log(channelDetail);

  return (

      <Box minHeight={'95vh'} mt={'1vh'}>
        <Box>
        <Box sx={{width:'100%' , height:'200px' , zIndex:'10' , backgroundPosition:'center', backgroundSize:'cover' , objectFit:'cover' , backgroundRepeat:'no-repeat',
        backgroundImage:`url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`}}/>
        <Box display={'flex'} justifyContent={'center'}>
          
          <ChannelCard video={channelDetail} topPosition={'-100px'}/>
        </Box>
        </Box>

        <Box>
          <Videos videos={videos}/>
        </Box>

      </Box>
    
  )
}

export default Channel