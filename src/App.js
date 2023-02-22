import Home from "./components/Home";
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Router, Routes } from "react-router-dom";
import ProductDetials from "./components/ProductDetials";



const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails/:id" element={<ProductDetials />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
