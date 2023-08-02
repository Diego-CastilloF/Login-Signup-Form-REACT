import React, {useState} from 'react'
import './navbar.css'
import Login from './Login'

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div>
        <header className="header">
        <nav className="nav">
            <a href="#" className="nav_logo">CodingLab</a>
            <ul className="nav_items">
            <li className="nav_item">
                <a href="#" className="nav_link">Home</a>
                <a href="#" className="nav_link">Product</a>
                <a href="#" className="nav_link">Services</a>
                <a href="#" className="nav_link">Contact</a>
            </li>
            </ul>
            <button className="button" id="form-open" onClick={() => setOpenLogin(true)}>Login</button>
            <Login open={openLogin} onClose={() => setOpenLogin(false)} />
        </nav>
        </header>
    </div>
  )
}

export default Navbar