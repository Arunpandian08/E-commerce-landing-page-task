import React, { useState, useEffect } from 'react'
import './productModal.css'

const ProductModal = ({ product, closeModal, addToCart, renderStarRating }) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(true)
    }, [])

    const handleClose = () => {
        setIsActive(false)
        setTimeout(closeModal, 300) // Wait for the animation to finish before closing
    }

    return (
        <div className={`product-modal-overlay ${isActive ? 'active' : ''}`} onClick={handleClose}>
            <div className="product-modal-content" onClick={e => e.stopPropagation()}>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={product.image} className="card-img-top p-5 pb-0" alt={product.title}/>
                    </div>
                    <div className="col-md-6">
                        <div className="text-danger">{product.category.toUpperCase()}</div>
                        <h6 className="card-title">{product.title}</h6>
                        <div className="d-flex align-items-center mb-2">
                            {renderStarRating(product.rating.rate || product.rate)}
                            <span className="ms-1">({product.rating.rate || product.rate})</span>
                        </div>
                        <div className="card-text">$ {product.price}</div>
                        <div className="card-text"><span className='text-success'>{product.rating.count || product.count}</span> Products available</div>
                        <p className="mt-3">{product.description}</p>
                        <div className="text-center">
                            <button className="btn btn-warning mt-2" onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <button className="btn-close position-absolute top-0 end-0 m-3" onClick={handleClose}></button>
            </div>
        </div>
    )
}

export default ProductModal