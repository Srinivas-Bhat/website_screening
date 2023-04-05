import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios';


const PageHome = ({setApiData}) => {
      const [searchInput, setSearchInput] = useState("");
      const [searchInputError, setSearchInputError] = useState(true);

      const navigate = useNavigate();
    //   const url = process.env.URL;
    //   console.log(URL)

      const handleSearchChange = (e) => {
        const { value } = e.target;
        if (
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(
            value
          )
        ) {
          setSearchInput(value);
          setSearchInputError(false);
        } else {
          setSearchInputError(true);
        }
      };
      const handleSearchClick = (e) => {
        e.preventDefault();
        console.log(searchInput);
         var config = {
           method: "POST",
           url: `https://merchant-website-screening.trustcheckr.com/get-data-from-url`,
           headers: {
             "Content-Type": "application/json",
           },
           body: {
             base_url: searchInput,
           },
         };
         axios(config)
         .then((response) => {
            console.log(response.data);
            setApiData(response.data)
         })
         .catch((error) => {
            console.log(error)
         })
        // navigate("/results")
        // console.log(searchInput);
      };
  return (
    <Box
      sx={{
        height: "100vh",
        objectFit: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) , url(https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Navbar />
      <Home
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchClick={handleSearchClick}
        handleSearchChange={handleSearchChange}
        searchInputError={searchInputError}
      />
    </Box>
  );
}

export default PageHome