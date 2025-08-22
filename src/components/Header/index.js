import React, { useEffect, useState } from "react";
import logo from "./Logo.png";
import "./styles.css";

const Header =(props)=>{
    
    //---------->USESTATE<-----------------//
    // const [variable para llamada, nombre de función set]=comando "useState" (valor predeterminado al iniciar)
    const [className,setClassName]=useState("diastole");

    //---------->USEEFFECT<-----------------//
    //useEffect(Función,[dependencias "si no tiene dependencias se ejecutará al enseguida del montado de la app"])
    useEffect(()=>{
        //se define un timer con nombre timerLogo... es un id para un timer
        const timerLogo=setInterval(()=>{//setInterval(funcion,tiempo en ms) 
            setClassName(//La función previamente definida setClassName (linea 9) setClassName("nuevo valor")
                prevClassName=>{//Se crea una función que recibe el estado actual(por lo tanto tambien el previo por cada ciclo) 
                    return prevClassName==="diastole"?"sistole":"diastole"//se evalua el estado y se decide el cambio y se devuelve con RETURN por ser una funcion
                }
            )
        },800);
        return ()=>clearInterval(timerLogo);//se devuelve una función del useEffect para borrar el timerID
    },[]);//al no haber dependencias "[]" esta función se repite por cada cambio y por lo tanto se repite la simulación de un latido
    
    return(// en componentes funcionales ya no se requiere el comando RENDER y solo se utiliza el RETURN 
        //observar que el llamado de las variables es directamente como se nombraron en la linea 9 {className}
        <div className="container__Logo">
            <img id="Logo"className={className} src={logo} alt="VisioMusic_logo"/>
            <h2 className="logoTitle">Bienvenido a Visio-Music</h2>
        </div>
    )
}

export default Header;