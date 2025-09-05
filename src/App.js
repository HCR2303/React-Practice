import {useEffect } from "react";
import Header from "./components/Header";
import Searcher from "./components/Searcher";
import Songs from "./components/Songs/songs";
import {BrowserRouter, Routes,Route} from "react-router";

const App=()=>{
  useEffect(()=>{
    console.log("La App se ha cargado correctamente")
  },[])
  return (
    <>
      <Header/>  
    
      <Routes>
        <Route path="/" element={<Searcher/>}></Route>
        <Route path="/songs/:id" element={<Songs/>}></Route>
      </Routes>
    </>
  );
}


export default App;
