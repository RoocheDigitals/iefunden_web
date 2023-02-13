import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Cppa from "./pages/Container/Platforms/Cppa/Cppa";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="cppa" element={<Cppa />} /> */}
        {/* <Route path="cso" element={<Cso />} />
        <Route path="iib" element={<Iib />} /> */}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
