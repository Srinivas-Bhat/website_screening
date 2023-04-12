import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Results from "../../Components/Results/Results";

const PageResults = ({ apiData, setApiData, apiDataCompleted }) => {
  return (
    <Box>
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Results
          apiData={apiData}
          setApiData={setApiData}
          apiDataCompleted={apiDataCompleted}
        />
      </Container>
    </Box>
  );
};

export default PageResults;
