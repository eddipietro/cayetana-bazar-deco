import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import FadeLoader from "react-spinners/FadeLoader";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "productos");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((result) => {
        setProduct({
          id: id,
          ...result.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <FadeLoader color="#756d6d" size={150} />
          <span>Cargando...</span>
        </div>
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
