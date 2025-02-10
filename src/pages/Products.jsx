import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import ProductsTable from '../components/Table/ProductsTable'
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react'

const Products = () => {
  const {getStockData}=useStockCall()

  useEffect(()=>{
    getStockData("products")
    getStockData("brands")
    getStockData("categories")
  },[])

  return (
    <div>
       <Container>
      <Typography variant="h4" color="secondary.second" align="center">
        Products
      </Typography>
      <Button variant="contained">NEW PRODUCT</Button>
      <ProductsTable/>
    </Container>/
    </div>
  )
}

export default Products