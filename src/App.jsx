import './App.css';
import { Context, useMediaQuery } from 'react-responsive';
import {Outlet} from 'react-router-dom';
import React from 'react';


function App() {
 
      /*
      {cat.map((element)=>{
    return (
      <Categorie key={element.id} categorie={element} toQuestions={()=>console.log(element.categorie)}></Categorie>
    )

  })} 
  {isMobileDevice && <Mobile />}
  {isLaptop && <Laptop />}
      */
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 1px)",
  });
    
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 376px)",
  });
  return (
    <div className="App">
      <h1>QEasy, une appli par Anthony Hamann</h1>
    <Outlet />
    </div>
  )};


export default App;
