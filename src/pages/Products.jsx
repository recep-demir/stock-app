import React from 'react'

const Products = () => {
  return (
    <div> <Container>
    <Typography variant="h4" color="secondary.second" align="center">
      Products
    </Typography>
    <Button variant="contained"  onClick={handleOpen}  >NEW FIRM</Button>
    <Grid container spacing={2} mt={2}>
      {firms.map((firm,index) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={index} >
        <FirmsCard  {...firm}  setInitialState={setInitialState} handleOpen={handleOpen}/>
        </Grid>
      ))}
    </Grid>

    <FirmModal  open={open}   handleClose={handleClose} initialState={initialState}   />

  </Container>
  </div>
  )
}

export default Products