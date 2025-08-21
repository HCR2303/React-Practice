import { Component } from "react";
import Header from "./components/Header";
import Buscador from "./components/Searcher";
import Songs from "./components/Songs/songs";

class App extends Component{
  componentDidMount(){
    console.log("La App se ha cargado correctamente")
  }
  render(){
    return (
      <>
        <Header/>
        <Buscador/>
        <Songs/>
      </>
    );
  }
}

export default App;
