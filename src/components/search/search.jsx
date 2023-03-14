import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import {Videos} from "../index"
import {ApiService} from '../../services/api.service'
const Search = () => {

  const [videos, setvideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
				setvideos(data.items)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [id])

  return (
      <Box>

          <Typography variant="h4" m={2} fontWeight={'600'} color={'gray'}>
            Search results for <span style={{color:'red'}}>{id.toUpperCase()}</span> video
          </Typography>
          <Videos  videos={videos}/>
       
      </Box>
  )
}

export default Search
