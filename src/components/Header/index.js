import React, { Component } from "react";
import logo from "./Logo.png";
import "./styles.css";

class Header extends Component {    
    constructor(props){
        super(props);
        this.state={
            className:"diastole"
        }
    }

    componentDidMount(){
        this.timerLogo=setInterval(()=>{
            this.setState(prevProps=>({
                className:prevProps.className=="diastole"?"sistole":"diastole",
            }));
        },800)
    }
    componentWillUnmount(){
        clearInterval(this.timerLogo);
    }

    render(){
        return(
            <div className="container__Logo">
                <img id="Logo"className={this.state.className} src={logo} alt="VisioMusic_logo"/>
                <h2 className="logoTitle">Bienvenido a Visio-Music</h2>
            </div>
        )
    }

}

export default Header;