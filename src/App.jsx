import { useState } from "react";
import Header from "./component/Header";
import Cart from "./component/Cart";
import Footer from "./component/Footer";

const App = () => {
  const [products, setProduct] = useState([
    { id: 0, name: "Pepsi", price: 10, count: 1 },
    { id: 1, name: "Kranchy", price: 20, count: 1 },
    { id: 2, name: "Kola", price: 30, count: 1 },
    { id: 3, name: "Chepsy", price: 40, count: 1 },
  ]);
  const increment = (id) => {
    let newproducts = products;
    newproducts = products.map((product) => {
      if (product.id == id) product.count += 1;
      return product;
    });
    setProduct(newproducts);
  };

  const decrement = (id) => {
    let newproducts = products;
    newproducts = products.map((product) => {
      if (product.id == id) product.count -= 1;
      return product;
    });
    setProduct(newproducts);
  };
  
  const del = (id) => {
    let newproduct = products;
    newproduct = products.filter((product) => (
      product.id != id
    ));
    setProduct(newproduct);
  };

  const [bg, setBg] = useState(true);
const change = () => {
  setBg(bg ? false : true);
};



  const reset = () => {
    let newreset = products;
    newreset = products.map((product) => {
      product.count = 1;

      return product;
    });
    setProduct(newreset);
  };

  const empty = () => {
    setProduct([]);
  };
  


  let total = 0;
  products.forEach(({ price, count }) => (total += price * count));

  return (
    <div className={bg ? "bg-white" : "bg-black"}>
      <Header products={products}/>
      <Cart products={products} total={total} increment={increment} decrement={decrement} del={del} reset={reset} change={change} empty={empty}/>
      <Footer />
    </div>
  );
};

export default App;
