import Home from "./components/Home";
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Router, Routes } from "react-router-dom";
import ProductDetials from "./components/ProductDetials";
import BottomBar from "./components/BottomBar";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";



const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});


function App() {

  const [progress, setProgress] = useState(0)

  const setLoaderValue = (e) => {
    setProgress(e)
  }
  return (
    <ThemeProvider theme={theme}>
      <LoadingBar
        color='#f44336'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>

        <Route path="/" element={<Home setLoaderValue={setLoaderValue} />} />
        <Route path="/productDetails/:id" element={<ProductDetials setLoaderValue={setLoaderValue} />} />
      </Routes>
      <BottomBar />
    </ThemeProvider>
  );
}

export default App;
