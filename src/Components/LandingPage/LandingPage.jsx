import React, { useState } from 'react'
import Carousel from './Carousel/Carousel'
import ProductCard from './ProductCards/ProductCard'
import CartOffCanvas from '../CartOffCanvas/CartOffCanvas'
import ProductModal from './ProductCards/ProductModal/ProductModal'

const LandingPage = ({ addToCart, cartItems, removeFromCart, searchTerm }) => {

    const [selectedProduct, setSelectedProduct] = useState(null)

    const closeModal = () => {
        setSelectedProduct(null)
    }

    const renderStarRating = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <div className="star-rating text-warning">
                {[...Array(5)].map((_, index) => (
                    <i key={index}
                        className={
                            index < fullStars
                                ? "fas fa-star"
                                : index === fullStars && hasHalfStar
                                    ? "fas fa-star-half-alt"
                                    : "far fa-star"
                        }
                    ></i>
                ))}
            </div>
        );
    }

    return (
        <section className='container'>
            <div className='row'>
                <div className='text-center'>
                    <h1>Welcome to our E-Commerce Store</h1>
                    <p>We offer a wide range of products to meet your needs.</p>
                </div>
            </div>
            <Carousel />
            <div>
                <ProductCard
                    addToCart={addToCart}
                    searchTerm={searchTerm}
                    setSelectedProduct={setSelectedProduct}
                    renderStarRating={renderStarRating}
                />
            </div>
            <div>
            </div>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    closeModal={closeModal}
                    addToCart={addToCart}
                    renderStarRating={renderStarRating}
                />
            )}
            <CartOffCanvas cartItems={cartItems} removeFromCart={removeFromCart} />
        </section>
    )
}

export default LandingPage