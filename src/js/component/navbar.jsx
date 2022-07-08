import React from 'react'
import PropTypes from 'prop-types';
function Navbar(props){
    return(
    <nav className="navbar navbar-expand-lg  row-reverse" style={{"background" : "#222528"}}>
      <img src="https://e7.pngegg.com/pngimages/183/847/png-clipart-flag-of-canada-maple-leaf-t-shirt-red-circle-flag-leaf.png" alt="" style={{"height": "59px" , "border-radius":"30px"}} />
    <div className="container-fluid d-flex justify-content-between">
    <div className=''><a className="navbar-brand"style={{"color" : "white"}} href="#">{props.titulo}</a></div>
      <div className="collapse navbar-collapse justify-content-end" id="navbarScroll" >
        <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll " style={{"--bs-scroll-height": "100px;"}}>
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="#"style={{"color" : "white"}}>{props.link1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"style={{"color" : "white"}}>{props.link2}</a>
          </li>
          <li className="nav-item dropdown">
          </li>
          <li className="nav-item">
            <a className="nav-link "style={{"color" : "white"}}>{props.link3}</a>
          </li>
      
        </ul>
      </div>
      
    </div>
  </nav>);
}
Navbar.propTypes = {
  
  titulo:  PropTypes.string,
  link1:  PropTypes.string,
  link2:  PropTypes.string,
  link3:  PropTypes.string,
 };
export default Navbar;