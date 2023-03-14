import {Paper , IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { colors } from '../../constans/colors'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

const SearchBar = () => {

  const navigate = useNavigate();
  const [value , setvalue] = useState('')

  const changeHandler = e =>{
    e.preventDefault()
    if(value) {
      navigate(`/search/${value}`)
      setvalue('')
    }
  }
  return (
    <Paper component={'form'} sx={{border:`1px solid white`, pl:2 , boxShadow :'none' , m:"0px 20px"  , display:'flex' , borderRadius:'30px' , background:'transparent'}} onSubmit={changeHandler} >
        <input type="text" placeholder='Search ... ' className='searchBar' onChange={e => setvalue(e.target.value)} value={value}/>
        <IconButton type='submit'>
            <SearchIcon sx={{color:'white'}}/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
