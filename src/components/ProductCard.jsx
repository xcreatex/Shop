"use client"

import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/ProductCard.css"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }

  // Truncate title if it's too long
  const truncateTitle = (title) => {
    return title.length > 60 ? title.substring(0, 57) + "..." : title
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="product-image"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "/placeholder.svg"
          }}
        />
      </div>

      <div className="product-info">
        <h3 className="product-title" title={product.title}>
          {truncateTitle(product.title)}
        </h3>

        <div className="product-category">{product.category}</div>

        <div className="product-price">${product.price.toFixed(2)}</div>

        <div className="product-rating">
          <span className="rating-stars">
            {"★".repeat(Math.round(product.rating.rate))}
            {"☆".repeat(5 - Math.round(product.rating.rate))}
          </span>
          <span className="rating-count">({product.rating.count})</span>
        </div>
      </div>

      <button className="quick-add-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </Link>
  )
}

export default ProductCard
