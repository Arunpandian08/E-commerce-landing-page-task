import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Shopping Cart. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer