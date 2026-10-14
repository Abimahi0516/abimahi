import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Components/Task1.jsx';
import Project from './Components/Task2.jsx';
import React from './Components/Task3.jsx';
import Task from './Components/Task4.jsx';

function App() {
 
  return (
    <>
     <Header/>
     <Project/>
     <React/>
     <Task/>
    </>
  );
}

export default App;
