import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student from './Components/Task1.jsx';
import LoginStatus from './Components/Task2.jsx';
import Result from './Components/Task3.jsx';
import  Product from './Components/Task4.jsx';
import AgeCheck from './Components/Task5.jsx';

function App() {
  return (
    <>
    <Student/>
    <LoginStatus/>
    <Result/>
    <Product/>
    <AgeCheck/>
       </>
  );
}

export default App;
