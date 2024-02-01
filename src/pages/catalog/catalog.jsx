import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "../catalog/catalog.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

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

// function Catalog() {
//   return (
//     <div className={styles.catalogMain}>
//       <Header />

//       <Footer />
//     </div>
//   );
// }

// export default Catalog;

function Catalog() {
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
      <div className={styles.catalogMain}>
        <Header />
        <div className={styles.categories}>
          {products.map((product) => (
            <div key={product.id}>
              <li>{product.name}</li>
              <img src={product.image} alt="" style={{ width: "150px" }} />
            </div>
          ))}

          <ul>
            {Array.from({
              length: Math.ceil(products.length / setProducts),
            }).map((_, index) => (
              <li key={index}>
                <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                <button></button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.categories}>
          {products.map((product) => (
            <div key={product.id}>
              <li>{product.name}</li>
              <img src={product.image} alt="" style={{ width: "150px" }} />
            </div>
          ))}

          <ul>
            {Array.from({
              length: Math.ceil(products.length / setProducts),
            }).map((_, index) => (
              <li key={index}>
                <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                <button></button>
              </li>
            ))}
          </ul>
        </div>
        
        <Footer/>
      </div>
     
    </>
  );
}
export default Catalog;
