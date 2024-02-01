import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./categories.module.css";

async function getUser() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}

function Categories() {
  const [products, setProducts] = useState([]);

  const displayItems = async () => {
    const response = await getUser();
    if (response) {
      setProducts(response.data);
    }
  };
  useEffect(() => {
    displayItems();
  }, []);

  return (
    <>
      <div className={styles.categories}>
        {products.map((product) => (
          <div key={product.id}>
            <li>{product.name}</li>
            <img src={product.image} alt="" style={{ width: "150px" }} />
          </div>
        ))}

        <ul>
          {Array.from({ length: Math.ceil(products.length / setProducts) }).map(
            (_, index) => (
              <li key={index}>
                <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                <button></button>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
export default Categories;
