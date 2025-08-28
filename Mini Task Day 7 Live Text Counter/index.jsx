import "./App.css";

export default function App() {
  const product = {
    name: "Wireless Headphones",
    price: "₹3,499",
    rating: 4.5,
    image: "https://via.placeholder.com/300x200.png?text=Product+Image",
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Lightweight, comfortable, and perfect for daily use.",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />

        <div className="product-body">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-description">{product.description}</p>

          <div className="product-info">
            <span className="product-price">{product.price}</span>
            <span className="product-rating">⭐ {product.rating}</span>
          </div>

          <div className="product-buttons">
            <button className="btn-primary">Buy Now</button>
            <button className="btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}