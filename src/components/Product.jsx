import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const [product,setProduct] =useState({});
  const {id} =useParams();

  useEffect(() => {
    if(id){
      fetch(`http://localhost:8080/todos/${id}`)
      .then((r)=>r.json())
      .then((d)=>setProduct(d));
    }
  
  }, [id])
  
  return (
   
    <>
   
    <img src={product.imgurl} style={{border:"1px solid black" , width:"300px"}}/>
    <div>Product ID:{id}
    <div><h3>{product.name}</h3></div>
    <p>Price:{product.price}</p>
    </div>
    </>
   
  )
}

export default Product