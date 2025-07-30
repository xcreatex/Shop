"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/ProductDetail.css"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)

        if (!response.ok) {
          throw new Error("Product not found")
        }

        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
        console.error("Error fetching product:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
      setAddedToCart(true)

      // Reset the "Added to cart" message after 3 seconds
      setTimeout(() => {
        setAddedToCart(false)
      }, 3000)
    }
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    )
  }

  if (error) {
    return <div className="error-container">Error: {error}</div>
  }

  if (!product) {
    return <div className="error-container">Product not found</div>
  }

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={handleGoBack}>
        &larr; Back
      </button>

      <div className="product-detail">
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
          <h1 className="product-title">{product.title}</h1>

          <div className="product-category">{product.category}</div>

          <div className="product-price">${product.price.toFixed(2)}</div>

          <div className="product-rating">
            <span className="rating-stars">
              {"★".repeat(Math.round(product.rating.rate))}
              {"☆".repeat(5 - Math.round(product.rating.rate))}
            </span>
            <span className="rating-count">({product.rating.count} reviews)</span>
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <button className="quantity-button" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="quantity-input"
              />
              <button className="quantity-button" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>

            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          {addedToCart && <div className="added-to-cart-message">Product added to cart!</div>}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
