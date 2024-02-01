// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './pagination.module.css'

// const Pagination = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.escuelajs.co/api/v1/products?offset=${(currentPage - 1) * 10}&limit=10`
//         );
//         const data = response.data;
//         setProducts(data.products);
//         setTotalPages(Math.ceil(data.total / 10));
//       } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//       }
//     };

//     fetchProducts();
//   }, [currentPage]);

//   const handlePageChange = newPage => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div>
//       <Carousel showThumbs={false} showIndicators={false}>
//         {products.map((product, index) => (
//           <div key={index}>
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       </Carousel>

//       <div className="pagination">
//         <p>Page {currentPage} of {totalPages}</p>
//         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
