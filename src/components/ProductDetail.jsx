import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProductDetails(data);
        } else {
          setError("Failed to fetch product details.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productDetails) {
    return <div>No product found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-3">
        <Link to="/Products" className="btn btn-secondary">
          Back
        </Link>
      </div>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={productDetails.image}
              className="img-fluid rounded-start"
              alt={productDetails.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{productDetails.title}</h5>
              <p className="card-text">
                <strong>Price:</strong> ${productDetails.price}
              </p>
              <p className="card-text">
                <strong>Description:</strong> {productDetails.description}
              </p>
              <p className="card-text">
                <strong>Category:</strong> {productDetails.category}
              </p>
              <p className="card-text">
                <strong>Rating:</strong> {productDetails.rating.rate} (
                {productDetails.rating.count} reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
