import react from 'react';
import Proptpyes from 'prop-types';
 import {NavLink} from "react-router-dom";

export default function Navbar(props){
  const handleCyanMode =()=>{
    props.theme("#073642","#002b36","#839496");
  }

  const handleNightMode =()=>{
    props.theme("#e4d5b7","#f4ecd8","#e94560");
  }

  const handleBlueMode =()=>{
    props.theme("#aed6f1","#d6eaf8","#1b4f72");
  } 
  
  
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{padding:0 }} >
        <div className="container-fluid" style={props.style}>
          <NavLink className="nav-link active" style={props.style}
         to="/">{props.title}</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={props.style} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <NavLink className="nav-link active"  style={({ isActive}) => {
        return {
          ...props.style,
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "red" : props.style.color,
          };
       }} aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className="nav-link"  style={({ isActive}) => {
        return {
          ...props.style,
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "red" : props.style.color,
          };
       }} to="/About">{props.aboutText}</NavLink>
              </li>
              
            </ul>
            <button onClick={handleCyanMode} style={{width:"30px",height:"30px",borderRadius:"50%",border:"2px",marginRight:"10px",textAlign:"left" ,backgroundColor:"#839496"}}></button>
            
            <button onClick={handleNightMode} style={{width:"30px",height:"30px",borderRadius:"50%",border:"2px",marginRight:"10px",textAlign:"left" ,backgroundColor:"#f4ecd8"}}></button>

            <button onClick={handleBlueMode} style={{width:"30px",height:"30px",borderRadius:"50%",border:"2px",marginRight:"10px",textAlign:"left" ,backgroundColor:"#d6eaf8"}}></button>

            <div className="form-check form-switch" style={props.style} >
              <input className="form-check-input" type="checkbox" onClick ={props.mode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
              </div>
          </div>
        </div>
  </nav>
    )
};

Navbar.propTypes={
    title :Proptpyes.string.isRequired,
    aboutText : Proptpyes.string.isRequired
}

Navbar.defaultProps={
    title:"App name",
    aboutText:"About text here"
}