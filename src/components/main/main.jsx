import {Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { useState , useEffect} from "react"
import {colors} from '../../constans/colors'
import {Categories , Videos , Menus} from '../index'
import {ApiService} from '../../services/api.service'
const Main = () => {

    const [selectedCatecory, setselectedCatecory] = useState('Tajvid')
    const [videos, setvideos] = useState([])


    const  setName = (categoriyName) =>{
      setselectedCatecory(categoriyName);
    }

    useEffect(() =>{

      const getData = async () =>{
        try{
          const data = await ApiService.fetching(`search?part=snippet&q=${selectedCatecory}`)
          setvideos(data.items)
        }
        catch(error){
          console.log(error);
        }
      }

      getData();

    } , [selectedCatecory])

  return (

    <Stack sx={{display:'flex' , overflowX:'hidden'}} direction={'row'} >

      <Box width={'10%'} height={'100%'}>
        <Menus/>
      </Box>
        
        <Box sx={{height:'90vh', width:{xs:'100%' , md:'90%'}}} p={0}>
            <Box >
            <Categories setName={setName} selectedCatecory={selectedCatecory} />
                <Typography variant="h4" fontWeight={'bold'} m={1} sx={{textAlign:'end' , color:'gray'}}>
                {selectedCatecory} <span style={{color:colors.danger}}>Videos</span>
                </Typography>

                <Videos  videos={videos}/>
            </Box>
        </Box>
    </Stack>
  )
}

export default Main