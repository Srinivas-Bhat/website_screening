import React from 'react'
import {AppBar, Box, IconButton, InputBase, Paper, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EastIcon from "@mui/icons-material/East";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({
  searchInput,
  setSearchInput,
  handleSearchClick,
  handleSearchChange,
  searchInputError,
  condition,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1, position: "absolute" }}>
        <AppBar
          position="fixed"
          sx={{
            background: location.pathname === "/" ? "transparent" : "primary",
            boxShadow: "none",
          }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              onClick={() => navigate("/")}
              sx={{ flexGrow: 1, fontFamily: "cursive", cursor: "pointer" }}>
              <b> Website Screening </b>
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            {/* {location.pathname === "/" ? null : (
              <Paper
                component="form"
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { sm: 400, xs: 300 },
                }}>
                <InputBase
                  onChange={(e) => handleSearchChange(e)}
                  name="search"
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search google maps" }}
                  size="small"
                />
                <IconButton
                  disabled={searchInputError ? true : false}
                  size="small"
                  type="button"
                  sx={{ p: "7px" }}
                  onClick={(e) => handleSearchClick(e)}>
                  <SearchIcon />
                </IconButton>
              </Paper>
            )} */}
            {location.pathname.includes("results") ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => navigate("/")}
                sx={{ mr: 2 }}>
                <EastIcon />
              </IconButton>
            ) : null}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar