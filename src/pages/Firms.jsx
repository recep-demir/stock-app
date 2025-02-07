import React from "react";
import { useEffect } from "react";
import useStockCall from "../hook/useStockCall";
import FirmsCard from "../components/Cards/FirmsCard";
import { Container, Typography } from "@mui/material";
import { Button ,Grid} from "@mui/material";
import { useSelector } from "react-redux";


const Firms = () => {
  const { getFirms,getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("firms")
  }, []);

  return (
    <Container>
      <Typography variant="h4" color="secondary.second" align="center">
        Firms
      </Typography>
      <Button variant="contained">NEW FIRM</Button>
      <Grid container spacing={2} mt={2}>
        {firms.map((firm,index) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={index} >
          <FirmsCard  {...firm} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Firms;
