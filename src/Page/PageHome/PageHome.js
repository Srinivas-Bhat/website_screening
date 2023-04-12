import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios';


const PageHome = ({ setApiData, apiData, setApiDataCompleted, setStateLoading, stateLoading }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchInputError, setSearchInputError] = useState(true);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setStateLoading(true);
    console.log(searchInput);
    var config = {
      method: "POST",
      url: `https://merchant-website-screening.trustcheckr.com/url-screening`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        base_url: searchInput,
        url: searchInput,
      },
    };
    axios(config)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        setApiData(response.data);
        // navigate("/results");
      })
      .catch((error) => {
        setLoading(false);
        setStateLoading(true);
        console.log(error);
      });
  };

  useEffect(() => {
    setStateLoading(false);
  }, [])

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
        apiData={apiData}
        setApiData={setApiData}
        loading={loading}
        setApiDataCompleted={setApiDataCompleted}
        setStateLoading={setStateLoading}
        stateLoading={stateLoading}
      />
    </Box>
  );
};

export default PageHome