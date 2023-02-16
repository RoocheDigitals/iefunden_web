import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/Home";
import Cppa from "./components/Cppa/Cppa";
import Cso from "./components/Cso/Cso";
import Iib from "./components/Iib/Iib";
import CppaLayout from "./Layout/CppaLayout";
import CppaLogin from "./components/Cppa/Login/CppaLogin";
import CppaSignup from "./components/Cppa/Signup/CppaSignup";

import "./App.css";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    lightblue: "#01A4FF",
    subcolor: "#637C8D",
    white: "#FFFFFF",
    black: "#000000",
    grayAccent: "#E3E3E3",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "Inter, sans-serif",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cppa" element={<Cppa />}>
          <Route path="login" element={<CppaLogin />} />
          <Route path="signup" element={<CppaSignup />} />
        </Route>
        <Route path="cso" element={<Cso />} />
        <Route path="iib" element={<Iib />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

{
  /* ---------
  <Route path="wallet" element={<WalletLayout />}>
    <Route index element={<Wallet />} />
    <Route path="addmoney" element={<AddMoney />} />
    <Route path="withdraw" element={<Withdraw />} />
</Route> 
--------- */
}
