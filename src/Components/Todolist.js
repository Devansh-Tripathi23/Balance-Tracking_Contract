import React, { useState } from 'react'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Input } from '@mui/material';
import { styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
   
  }));



const Todolist = () => {
    let[input,setInput]=useState('')
    const[todoList,setTodoList]=useState([])
  const addItem = ()=>{
    if(input.length){
        const item = 
            {
                todoList : input 
            };
            
        setTodoList([...todoList,item])   

    }
   
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'center',width:'100%'}}>
          <Input type='text' placeholder='Add new Todo' value={input} onChange={(e)=>setInput(e.target.value)}></Input>
          <Button onClick={addItem}>Add</Button>
        </Grid>
        <Grid item xs={12}>
                {
                   todoList.map(( {todoList})=>{
                    return(
                <Box>
                    <Grid container>
                    <Grid item xs={12}>
                   <Item>{todoList}</Item>
                    </Grid>
                    </Grid>
                    </Box>
                
                    )
                   })
                }
                  
        </Grid>
        
      </Grid>
    </Box>
    </>
  )
}

export default Todolist