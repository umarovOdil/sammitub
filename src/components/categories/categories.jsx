import { Stack } from '@mui/system'
import React from 'react'
import {categoryBtn} from '../../constans/btns'

const Categories = ({setName,selectedCatecory}) => {
  return (
    <Stack direction={'row'} sx={{overflowX:'scroll'}}>
        {
        categoryBtn.map(item =>(
            <button key={item.name} className={`category-btn ${item.name === selectedCatecory && 'active'}`} onClick={() =>{setName(item.name)}} >
                <span style={{color:'gray'}}>{item.icon}</span>
                <span>{item.name}</span>
            </button>
        ))
        }
    </Stack>
  )
}

export default Categories