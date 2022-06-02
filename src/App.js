import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={""} element={<Home />} />
        <Route path={"about/"} element={<About />} />
        <Route path={"Products/*"} element={<Products />} >
          <Route path={":id"} element={<Product />} />
          
        </Route>
       
      </Routes>
    </div>
  );
}

export default App;


// / is noot mandatory
//for nested info we need 3 changes
//1.Parent route should accept all info url using *
//2.wrap child with parent and remove duplicate path info
//use outlet tag