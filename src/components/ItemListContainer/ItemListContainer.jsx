import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
//import FadeLoader from "react-spinners/FadeLoader";
import "./ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  // Utiliza useRef para preservar la variable entre renderizados
  const productsConsultRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const productsCollection = collection(db, "productos");

      if (categoryId) {
        const productsQuery = query(
          productsCollection,
          where("categoria", "==", categoryId)
        );
        // Asigna la referencia a productsConsultRef.current
        productsConsultRef.current = productsQuery;
      } else {
        // Asigna la referencia a productsConsultRef.current
        productsConsultRef.current = productsCollection;
      }

      try {
        const result = await getDocs(productsConsultRef.current);
        const listProducts = result.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setProductList(listProducts);
      } catch (error) {
        console.log(error);
      } finally {
        // Agrega un tiempo de espera de 3 segundos (ajusta según tus necesidades)
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      {/* Este h2 seria el banner que ingresade izquierda mostrando el nombre de la seccion */}
     

    <div className="categoria">
      
      {loading ? (
        <img src="osito-matero.gif" className="gif"  alt="Cargando" />
      ) : (
        <>
     <h2 className="reboteIn_izquierda">{mensaje}{categoryId} </h2>

          <ItemList productList={productList} />
        </>
      )}
    </div>

    </>


  );
};

export default ItemListContainer;