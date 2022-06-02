import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
const Navbar = () => {

    const navigate=useNavigate();
    const handleOnClick=(id)=>{
        if(id===1)
        {
            navigate("/products/1");
        }
        else if(id===2)
        {
            navigate("/products/2");
        }
    };
  return (
    <div style={{display:"flex" ,padding:"5px" ,
    justifyContent:"space-around",
    marginBottom:100,
    width:"90%",
    margin:"auto",
    backgroundColor:"white",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
    }}>
        {/* /:Home Page
        /about:About page
        /Products :Products Page */}
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/about">   <h3>About</h3></Link>
        <Link to="/Products">   <h3>Products</h3></Link>
        <button style={{padding:"3px"}} onClick={()=>handleOnClick(1) }>Go To Product 1</button>
        <button style={{padding:"3px"}} onClick={()=>handleOnClick(2)}>Go To Product 2</button>
    </div>
  )
}
export default Navbar;