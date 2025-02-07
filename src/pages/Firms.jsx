import React from 'react'
import { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'
import FirmsCard from './../components/FirmsCard';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Firms = () => {
const {getFirms}=useStockCall()
const {firms}=useSelector(state=>state.stock)


  useEffect(()=>{
  getFirms()
  },[])



  return (
   <Container>
    <Typography variant='h4' color="secondary.second" align='center'> 
      Firms

    </Typography>
    <Button variant='contained'>New Firm</Button>
    <Grid container spacing={2} mt={4}>

{firms.map((firm,index)=>(  
  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>

  <FirmsCard {...firm}/>

  </Grid>
  
  ))}

  

</Grid>

   </Container>
  )
}

export default Firms