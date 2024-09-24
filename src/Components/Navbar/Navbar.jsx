import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import CartOffCanvas from '../CartOffCanvas/CartOffCanvas'

const Navbar = ({ cartCount, cartItems, removeFromCart, onSearch }) => {

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        if (searchTerm.length > 0 || searchTerm.length !== '') {
            onSearch(searchTerm);
        }
    }
    // Scroll to product-card section
    const productCardSection = document.getElementById('product-card');
    if (productCardSection) {
        productCardSection.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-white border-bottom border-top border-2">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} width='100' height='50' alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <div className="d-flex justify-content-center w-100">
                            <div className="position-relative" style={{ minWidth: '300px' }}>
                                <input 
                                    className="form-control pe-5" 
                                    type="search" 
                                    name="searchTerm"
                                    placeholder="Search" 
                                    aria-label="Search" 
                                    onChange={handleSearch}
                                />
                                <i className="fas fa-search position-absolute top-50 end-0 translate-middle-y me-2"></i>
                            </div>
                        </div>
                        <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center gap-4">
                            <li className='nav-item'>
                                <i className='fa-regular fa-user fa-lg'></i>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn  d-flex justify-content-center align-items-center bg-warning text-dark px-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas">
                                    <i className="fa-solid fa-cart-shopping"></i> <span className='ms-2 fw-bold text-dark fs-5'>{cartCount}</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartOffCanvas cartItems={cartItems} removeFromCart={removeFromCart} />
        </>
    )
}

export default Navbar