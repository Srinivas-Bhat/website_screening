import React, {useState} from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import PageHome from './Page/PageHome/PageHome';
import PageResults from './Page/PageResults/PageResults';

const theme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Nunito Sans", sans-serif',
    // fontFamily: "'Montserrat', sans-serif",
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: "none",
          // backgroundColor: "#014b70",
          "&:hover": {
            // backgroundColor: "#0e6490",
          },
        },
      },
    },
  },
});



function App() {
  const [apiData, setApiData] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<PageHome setApiData={setApiData} />} />
        <Route path="/results" element={<PageResults />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
