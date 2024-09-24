import React from 'react'
 // We'll create this file for additional styles

const CartOffCanvas = ({ cartItems, removeFromCart }) => {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="cartOffcanvasLabel">Your Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column overflow-auto">
                <div className="flex-grow-1 overflow-auto">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item._id} className="card mb-3">
                                <div className="row g-0 px-2">
                                    <div className="col-4 d-flex justify-content-center align-items-center">
                                        <img src={item.image} className="img-fluid rounded-start" alt={item.title} style={{maxHeight: '100px', objectFit: 'contain'}} />
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body p-2">
                                            <h6 className="card-title mb-1">{item.title}</h6>
                                            <p className="card-text mb-1"><small>Price: ${item.price}</small></p>
                                            <p className="card-text mb-1"><small>Quantity: {item.quantity}</small></p>
                                            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item._id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-summary mt-auto">
                    <div className="d-flex justify-content-between mb-2">
                        <span>Total Quantity:</span>
                        <span>{totalQuantity}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Total Amount:</span>
                        <span>${totalAmount}</span>
                    </div>
                    <button className="btn btn-warning w-100" disabled={cartItems.length === 0}>
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartOffCanvas
