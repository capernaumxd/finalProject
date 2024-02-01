import axios from "axios";
import styles from "./home.module.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { useEffect, useState } from "react";
import Landingpage from "../video/video.jsx";
import Categories from "../../components/categories/categories.jsx";
import Lorem from "../../components/lorem/lorem.jsx";
// import Carousel from "../../components/pagination/pagination.jsx";

// async function getUser() {
//     try {
//       const response = await axios.get(
//         " https://api.escuelajs.co/api/v1/products"
//       );

//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function Home() {
//     const [products, setProducts] = useState([]);

//     const displayItems = async () => {
//       const response = await getUser();
//       if (response) {
//         setProducts(response.data);
//       }
//     };
//     useEffect(() => {
//       displayItems();
//     }, []);

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_main}>
        <>
          {/* <div className={styles.Home}> */}
          <Header />
          <Landingpage />
          <Lorem />
          <Categories />
          {/* <Pagination /> */}
          <Footer />
          {/* <Carousel /> */}
          {/* </div> */}
        </>
      </div>
    </div>
  );
}
export default Home;
