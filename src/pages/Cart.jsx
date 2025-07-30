"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/Cart.css"

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleCheckout = () => {
    if (cartItems.length === 0) return

    setOrderPlaced(true)
    clearCart()

    // Hide the success message after 4 seconds
    setTimeout(() => {
      setOrderPlaced(false)
    }, 4000)
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity)
    }
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {orderPlaced && <div className="order-success-message">Order placed successfully!</div>}

      {cartItems.length === 0 && !orderPlaced ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="continue-shopping-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "/placeholder.svg"
                    }}
                  />
                </div>

                <div className="cart-item-details">
                  <Link to={`/product/${item.id}`} className="cart-item-title">
                    {item.title}
                  </Link>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>

                  <div className="cart-item-actions">
                    <div className="cart-quantity-selector">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="quantity-button"
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="quantity-button"
                      >
                        +
                      </button>
                    </div>

                    <button onClick={() => removeFromCart(item.id)} className="remove-button">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-subtotal">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>

            <div className="cart-actions">
              <Link to="/" className="continue-shopping-button">
                Continue Shopping
              </Link>
              <button onClick={handleCheckout} className="checkout-button" disabled={cartItems.length === 0}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
