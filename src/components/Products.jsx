import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getTodo = async () => {
      let res = await fetch("http://localhost:8080/todos");
      let data = await res.json();
      setProducts(data);
    };
    getTodo();
  }, []);

  return (
    <>
    <table style={{border:"1px solid black" , margin:"auto" , padding:"10px 150px 10px 10px"}}>
    <thead style={{padding:"20px"}}>
           <th>Product ID</th>
           <th>Product Name</th>
           <th> Price </th>
           <th>more details</th>
         </thead>
   
      
      {products.map((p) => (
        
        <tbody>
        <>
       <tr>
       <td  key={p.id}>{p.id}</td>
        <td>{p.name}</td>
        <td>{p.price}</td>
        <td >
        <Link to={`/Products/${p.id}`}><button>more Details</button></Link>
        </td>
       </tr>
        </>
        </tbody>
      ))}
        </table>
          <Outlet />
       

      
    
      
  
    </>
  );
};

export default Products;
