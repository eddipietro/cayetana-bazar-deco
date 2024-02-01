import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
// import { db } from "../../firebase/firebase";
// import { getDocs, collection } from "firebase/firestore";




const categories = [

  {
    id: 2,
    path: "/category/Mates",
    name: "Mates",
  },
  {
    id: 3,
    path: "/category/Bombillas",
    name: "Bombillas",
  },
  {
    id: 4,
    path: "/category/Ferias",
    name: "Ferias",
  },
  {
    id: 5,
    path: "/category/Termos",
    name: "Termos",
  },  
  {
    id: 6,
    path: "/category/Sets Materos",
    name: "Sets Materos",
  }
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={`nav ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container" id="nav-container">
        <Link to="/">
          <img className="logo" src="./caye-removebg-preview.png" alt="cayetana" />
        </Link>

        <div className={`nav-icons ${menuOpen ? 'center-menu' : ''}`}>
          <button className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <CartWidget className="cart-icon"  id="cart-icon" />
        </div>

        <div className={`nav-items ${menuOpen ? 'show-menu' : ''}`}>
          <ul className="nav">
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={category.path}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;