import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import React, { useState } from 'react'
import SalesTable from '../components/Table/PurchasesTable'
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react'
import SalesModal from "../components/Modal/SalesModal"
import { useSelector } from 'react-redux'


const Sales = () => {
  const {getStockData,getSalesBrandPro}=useStockCall()
  const { loading, error } = useSelector((state) => state.stock);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [initialState,setInitialState]=useState({
      brandId: "",
      productId: "",
      quantity: "",
      price: "", 
      })
    
   
  useEffect(()=>{
    // getStockData("sales")
    // getStockData("brands")
    // getStockData("products")
    getSalesBrandPro()
  },[])

  return (
    <Container maxWidth={"xl"}>
    <Typography
      align="center"
      variant="h4"
      component="h1"
      color="secondary.second"
      
    >
      Sales
    </Typography>
    {loading ? (
      <Typography
        align="center"
        variant="h5"
        component="h3"
        color="secondary.second"
      >
        Loading....
      </Typography>
    ) : error ? (
      <Typography align="center" variant="h5" component="h3" color="error">
        Something went wrong...
      </Typography>
    ) : (
      <>
        <Button variant="contained" onClick={handleOpen} sx={{marginBottom:"1rem"}}>
          New Sale
        </Button>

        <SalesTable  handleOpen={handleOpen} setInitialState={setInitialState} />

        {open && (
          <SalesModal
            open={open}
            handleClose={handleClose}
            initialState={initialState}
          />
        )}
      </>
    )}
  </Container>
   
  )
}

export default Sales