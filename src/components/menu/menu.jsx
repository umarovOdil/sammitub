import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import {MenuBtns}  from "../../constans/btns";

const Menu = () => {
    
  return (
    <Box sx={{display:{xs:'none' , md:'flex'},justifyContent:'center',pt:3}} >
        <Stack sx={{gap:'10px'}}>
        {
        MenuBtns.map(item =>(
            <button sx={{width:"100px" , height:'80px' , borderRadius:'10px'}} className={`menuBtns ${item.className}`}>
                <span>{item.icon}</span>
                <p sx={{fontSize:'12px !important'}}>{item.name}</p>
            </button>
        ))
        }
      </Stack>
    </Box>
  )
}

export default Menu