"use client"

import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import "../styles/Home.css"

const Home = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        const data = await response.json()

        // Ensure all products have the required properties
        const validatedData = data.map((product) => ({
          ...product,
          price: product.price || 0,
          rating: product.rating || { rate: 0, count: 0 },
        }))

        setProducts(validatedData)
        setFilteredProducts(validatedData)
      } catch (err) {
        setError(err.message)
        console.error("Error fetching products:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories")
        if (!response.ok) {
          throw new Error("Failed to fetch categories")
        }
        const data = await response.json()
        setCategories(data)
      } catch (err) {
        console.error("Error fetching categories:", err)
      }
    }

    fetchCategories()
  }, [])

  // Filter products by category
  useEffect(() => {
    if (selectedCategory && selectedCategory !== "all") {
      const fetchProductsByCategory = async () => {
        try {
          setIsLoading(true)
          const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
          if (!response.ok) {
            throw new Error("Failed to fetch products by category")
          }
          const data = await response.json()
          setFilteredProducts(data)
        } catch (err) {
          setError(err.message)
          console.error("Error fetching products by category:", err)
        } finally {
          setIsLoading(false)
        }
      }

      fetchProductsByCategory()
    } else {
      setFilteredProducts(products)
    }
  }, [selectedCategory, products])

  // Filter products by search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      if (selectedCategory && selectedCategory !== "all") {
        // If a category is selected, don't override it
        return
      }
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredProducts(filtered)
    }
  }, [searchTerm, products, selectedCategory])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  if (error) {
    return <div className="error-container">Error: {error}</div>
  }

  return (
    <div className="home-container">
      <div className="filters-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="categories-container">
          <button
            className={`category-button ${selectedCategory === "" ? "active" : ""}`}
            onClick={() => handleCategoryChange("")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="no-products">No products found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Home
