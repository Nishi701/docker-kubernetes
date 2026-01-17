import { useState } from "react";
import {Link} from "react-router-dom";//we import link for not re-loading the page when we go through different pages

const Navbar = () => {
  //let btnName = 'light';//normal javascript variable.
  const [btnName, setBtnName] = useState('light');
  return (
    <div className='navbar' style={{
      "backgroundColor": "gray",
    }}>
      <h1>LOGO</h1>
      <ul className='menu-items'>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link> </li>
        <li><Link to="/kid">Kid</Link></li>
        <li>cart</li>
        <button onClick={() => {
          btnName === "light" ? setBtnName('Dark') : setBtnName("light");
        }}>{btnName}</button>
      </ul>
    </div>
  );
};
//default export
export default Navbar;
