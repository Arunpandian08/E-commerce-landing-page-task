import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item._id === product._id)
      if (existingItem) {
        return prevItems.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== productId))
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <div className="scrollable-container">
        <Header />
        <Navbar
          cartCount={cartCount}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          onSearch={handleSearch}
        />
        <LandingPage
          addToCart={addToCart}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          searchTerm={searchTerm}
        />
        <Footer />
      </div>
    </>
  )
}

export default App