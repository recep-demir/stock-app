import React from "react";
import { useEffect } from "react";
import useStockCall from "../hook/useStockCall";
import FirmsCard from "../components/Cards/FirmsCard";
import { Container, Typography } from "@mui/material";
import { Button ,Grid} from "@mui/material";
import { useSelector } from "react-redux";
import FirmModal from './../components/Modal/FirmModal';
import { useState } from "react";


const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [initialState,setInitialState]=useState({
    name:"",
    phone:"",
    address:"",
    image:""
  })


  useEffect(() => {
    getStockData("firms")
  }, []);
console.log(initialState)
  return (
    <Container>
      <Typography variant="h4" color="secondary.second" align="center">
        Firms
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
  );
};

export default Firms;
