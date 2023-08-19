import React,{useEffect , useState} from 'react'
import './Navbar.css';
import moviesTrailer from './moviesTrailerLogo.png';
function Navbar() {
  const [show,handleShow] = useState(false);
  useEffect(() => { 
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100 ){
        handleShow(true);
      }else{
        handleShow(false);
      }
    });

  },[]);
  return (
    <div className={`Nav ${show && "nav_black"}` }>
      <img className='Nav-logo' src={moviesTrailer} alt="netflix logo"/>
    </div>
  )
}

export default Navbar
