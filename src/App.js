import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Destination  from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import data from "./data.json"

import "./main.css"


const App = () => {
   
    return(
    <>
    <Header/>
    <Routes>
        <Route path="/space-tourism-website" element={<Home/>}/>
        <Route path="/destination" element={<Destination destinations={data.destinations} />} />
        <Route path="/crew" element={<Crew crew={data.crew} />}/>
        <Route path="/technology" element={<Technology technology={data.technology} />} />
    </Routes>
    </>
  )
}

export default App;
