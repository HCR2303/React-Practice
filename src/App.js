import {useEffect } from "react";
import Header from "./components/Header";
import Searcher from "./components/Searcher";
import Songs from "./components/Songs/songs";
import {Routes,Route} from "react-router";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";

const App=()=>{
  useEffect(()=>{
    console.log("La App se ha cargado correctamente")
  },[])
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header/>    
        <Routes>
          <Route path="/" element={<Searcher/>}></Route>
          <Route path="/songs/:id" element={<Songs/>}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}


export default App;
