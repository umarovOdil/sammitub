import { CheckCircle } from "@mui/icons-material";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const ChannelCard = ({ video , topPosition}) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        margin: "auto",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        height: "320px",
        width: { sx: "356px", md: "320px" },
        display: "flex",
        justifyContent:'center' ,
        margin:'0px 10px',
        marginTop:topPosition,
      }}
    >
      <Link to={`/channel/${video?.id.channelId ? video?.id.channelId : video?.id}`}>
      <CardContent sx={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            borderRadius: "50%",
            width: "180px",
            height: "180px",
            mb: "2px",
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography sx={{fontWeight:'bold' , mt:'15px' , display:'flex' , alignItems:'center'}}>
            {video?.snippet?.title}{' '}<CheckCircle sx={{color:'gray' , fontSize:'14px' , ml:'5px'}}/>
        </Typography>
        {video?.statistics?.subscriberCount && (
            <Typography>
            {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-Us')}{' '} subscribers follow
            </Typography>
        )}
      </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
