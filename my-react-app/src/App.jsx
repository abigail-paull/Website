import React,{useState} from 'react';
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import './App.css'

function App(props) {

 const [count,setCount]=useState(4) 
 const [theme, setTheme]=useState("Yellow")
 function decrementCount(){
  setCount(prevCount=> prevCount-1)
  setTheme("Yellow")

  }
  function incrementCount(){
    setCount(prevCount=> prevCount+1)
    setTheme("Red")
  }

  
 
  
     return(
         <>
        <Header/>
        <section className='Hero'>
        <Hero
        title="DeadPool & Wolverine"
        imgsrc="https://resizing.flixster.com/OBCMbeYEWS5tI2QhErFskxKyEa0=/206x305/v2/https://resizing.flixster.com/mPJp85eApHd8ih9XF5E9d3-2LbM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxODlkZDE1LTQyYjUtNDg5ZS05NjZmLWMxZDk1YWZhN2E1ZC5qcGc=" alt=""className="hero-img"
        desc="DeadPool & Wolverine"
        div="Action Movie"
        para="40.9%"
        Director="Abigail Paul"
        />
        
          
        <Hero
         title="The Union"
         imgsrc="https://resizing.flixster.com/h_VUrsfh-P-2_kRDCNA_sFntBWk=/206x305/v2/https://resizing.flixster.com/hYB41f7m0pUhlpCmBVCbsq9LOCo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc0OGY3MDJiLTUzMTMtNDNiNC05MjgyLTM3ZWRmMzYzNTI0Ny5qcGc="
         desc="The Union"
         div="Comedy & Horror"
         para="37.4%"
          Director="O'Nile Obi"
         />
         
        <Hero 
          title="Trap"
          imgsrc="https://resizing.flixster.com/g0rxvArZsZFsV8-gKSFPeNrmB-s=/206x305/v2/https://resizing.flixster.com/JMUezA59v3r50XvD34SELkqBnL0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZjYmVjMTllLTViOWYtNDY4NC04YWY5LTdmMGIxMTM1MWEwMS5qcGc="
          desc="Trap"
          div="Mouse & time Trap"
          para="30.2%"
          Director="Stanly"
        />
        <Hero
         title="jackpot!"
         imgsrc="https://resizing.flixster.com/_yC8AF-46nLToYSY6v606xkp7dE=/206x305/v2/https://resizing.flixster.com/cJ-ZXvAojFDjeYi1VwAIOX2CNSE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EwMDgwMjUwLTQwMGYtNGViMi05MTEyLTAzMDYxMTkxZTI4ZS5qcGc="
         desc="JackPot!"
         div="Real action Movie"
         para="29.1%"
         Director="Ugochukwu"
        />
        </section>


        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>



        </>
        
        
        


     );
     }

     export default App
