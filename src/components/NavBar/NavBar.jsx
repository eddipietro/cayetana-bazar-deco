import React, { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";




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
  },  ,
  {
    id: 6,
    path: "/category/Sets Materos",
    name: "Sets Materos",
  },
];

const NavBar = () => {
  return (
    <section className="nav">

  
            <Link  to="/#">
            <img className="logo" src="./caye-removebg-preview.png" alt="cayetana" />
      </Link>

      <div className="nav-items">
        <ul className="nav">
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <CartWidget />
 
  </section>
  );
};

export default NavBar;