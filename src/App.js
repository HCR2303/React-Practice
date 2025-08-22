import { Component, useEffect } from "react";
import Header from "./components/Header";
import Buscador from "./components/Searcher";
import Songs from "./components/Songs/songs";

const App=()=>{
  useEffect(()=>{
    console.log("La App se ha cargado correctamente")
  },[])
  return (
    <>
      <Header/>
      <Buscador/>
      <Songs/>
    </>
  );
}


export default App;
