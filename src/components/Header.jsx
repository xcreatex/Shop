"use client"

import { Link, useNavigate, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "../styles/Header.css"

const Header = ({ setIsAuthenticated }) => {
  const { cartCount } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    // Clear JWT token
    localStorage.removeItem("token")
    // Clear cart data
    localStorage.removeItem("cart")
    // Update authentication state
    setIsAuthenticated(false)
    // Redirect to login
    navigate("/login")
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          ShopReact
        </Link>

        <nav className="nav">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/cart" className={`nav-link cart-link ${location.pathname === "/cart" ? "active" : ""}`}>
            Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
