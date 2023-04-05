import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Results from "../../Components/Results/Results";

const PageResults = () => {
  return (
    <Box>
      <Navbar />
      <Container sx={{mt: 5}}>
        <Results />
      </Container>
    </Box>
  );
};

export default PageResults;
