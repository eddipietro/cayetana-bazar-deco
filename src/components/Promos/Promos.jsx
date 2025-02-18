import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Item from "../Item/Item";
import "./Promos.css";

const Promos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db, "productos");

    getDocs(productosRef).then((snapshot) => {
      const productosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filtrar productos con oferta
      const productosEnOferta = productosData.filter(
        (product) => product.oferta !== undefined && product.oferta < product.precio
      );

      setProductos(productosEnOferta);
    });
  }, []);

  return (
    <div className="promos-container">
      <h2 className="promos-title">🔥 Promociones Especiales 🔥</h2>
      <div className="promos-grid">
        {productos.length > 0 ? (
          productos.map((product) => <Item key={product.id} product={product} />)
        ) : (
          <p className="promos-empty">No hay productos en oferta en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default Promos;
