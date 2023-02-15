import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
// import Cppa from "./pages/Platforms/Cppa/Cppa";
// import Cso from "./pages/Platforms/Cso/Cso";
// import Iib from "./pages/Platforms/iib/Iib";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="cppa" element={<Cppa />} />
        <Route path="cso" element={<Cso />} />
        <Route path="iib" element={<Iib />} /> */}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
