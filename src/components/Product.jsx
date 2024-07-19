import { useState, useEffect } from "react";

const Product = () => {
  const [Products, setProduct] = useState([]);

  useEffect(() => {
    getProductsList();
  });

  const getProductsList = async () => {
    try{
        const products = await fetch("https://fakestoreapi.com/products");
        const data = await products.json();
        setProduct(data);
        console.log(data);
    }catch(Error){
        console.log(Error)
    }
  }
  return(
    <ul>
        {Products.length > 0 ? Products.map((product) => {
            return(<li key={product.id}>
                {product.title}
            </li>);
        }) :"No Data is Found"
        }
    </ul>

  );
};

export default Product;
