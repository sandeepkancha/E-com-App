import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [Products, setProduct] = useState([]);

  useEffect(() => {
    getProductsList();
  });

  const getProductsList = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      }
    } catch (Error) {
      console.log(Error);
    }
  };
  return (
    // <ul>
    //     {Products.length > 0 ? Products.map((product) => {
    //         return(<li key={product.id}>
    //             {product.title}
    //         </li>);
    //     }) :"No Data is Found."
    //     }
    // </ul>
    <div className="container mt-5">
      <h2 className="mb-4">Products List</h2>
      {Products.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                <Link to={`/products/${product.id}`} className="btn btn-info btn-sm mr-2">View</Link>
                  <button className="btn btn-primary btn-sm mr-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "NO data found."
      )}
    </div>
  );
};

export default Product;
