import { Box, IconButton, InputBase, Paper, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from "@mui/icons-material/Search";

const Home = ({searchInput,setSearchInput,handleSearchClick,handleSearchChange,searchInputError}) => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            position: "absolute",
            top: "26%",
            left: "8%",
            color: "white",
            letterSpacing: "0.05rem",
          }}
          variant="h3">
          <b> Website Screening Data</b>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            top: "35.5%",
            left: "10%",
            color: "#A8A8A8",
          }}>
          Input the URL below for the details of the website
        </Typography>
        <Paper
          component="form"
          sx={{
            position: "absolute",
            bgcolor: "#F2F2F2",
            p: "2px 20px",
            display: "flex",
            alignItems: "center",
            width: 460,
            height: 80,
            top: "43%",
            left: "8%",
            borderRadius: 15,
          }}>
          <InputBase
            sx={{ ml: 1, flex: 1, fontSize: "18px" }}
            placeholder="URL..."
            inputProps={{ "aria-label": "search google maps" }}
            onChange={(e) => handleSearchChange(e)}
          />
          <IconButton
            // type="button"
            color="primary"
            size="small"
            variant="outlined"
            sx={{ p: "10px", color: "#202020" }}
            onClick={(e) => handleSearchClick(e)}
            disabled={searchInputError ? true : false}
            aria-label="search">
            <SearchIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Paper>
      </Box>
    </>
  );
}

export default Home