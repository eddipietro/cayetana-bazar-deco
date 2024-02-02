import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
//import FadeLoader from "react-spinners/FadeLoader";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productsCollection = collection(db, "productos");
      const refDoc = doc(productsCollection, id);
      
      try {
        const result = await getDoc(refDoc);
        setProduct({
          id: id,
          ...result.data(),
        });
      } catch (error) {
        console.log(error);
      } finally {
        // Agrega un tiempo de espera de 3 segundos (ajusta según tus necesidades)
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <img src="osito-matero.gif" className="gif" alt="Cargando" />
      ) : (
        <>
          <div className="container">
            <ItemDetail product={product} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;