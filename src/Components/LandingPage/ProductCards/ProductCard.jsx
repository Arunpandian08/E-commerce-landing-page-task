import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import './productCard.css';
import FilterCard from './FilterCard/FilterCard';

const ProductCard = ({ addToCart, searchTerm, setSelectedProduct, renderStarRating }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://e-commerce-landing-page-server.onrender.com/api/product/get');
            const fetchedProducts = response.data.products;
            setProducts(fetchedProducts);

            const uniqueCategories = [...new Set(fetchedProducts.map(product => product.category))];
            setCategories(uniqueCategories);
        } catch (error) {
            console.log('Failed to fetch data', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const cleanSearchTerm = searchTerm.toLowerCase().replace(/'/g, '');
            const matchesSearch = product => product.category.toLowerCase().replace(/'/g, '').includes(cleanSearchTerm)
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.map(c => c.toLowerCase()).includes(product.category.toLowerCase())
            return products.filter(product => matchesSearch(product) && matchesCategory)
        });
    }, [products, searchTerm, selectedCategories]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="product-card-sticky" id='product-card'>
            <div className="container-fluid h-100">
                <div className="row h-100 py-3">
                    {/* Filter column */}
                    <FilterCard categories={categories} selectedCategories={selectedCategories} handleCategoryChange={handleCategoryChange} />

                    {/* Product cards column */}
                    <div className="col-lg-9 col-md-8 product-column">
                        <div className="product-card-container">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => (
                                        <div className="col" key={product._id}>
                                            <div className="card h-100 shadow-sm">
                                                <img src={product.image} className="card-img-top p-5 pb-0" alt={product.title} onClick={() => handleProductClick(product)} />
                                                <div className="card-body">
                                                    <div className="title" onClick={() => handleProductClick(product)}>
                                                        <div className="text-danger category">{product.category.toUpperCase()}</div>
                                                        <h6 className="card-title">{product.title}</h6>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        {renderStarRating(product.rating.rate || product.rate)}
                                                        <span className="ms-1">({product.rating.rate || product.rate})</span>
                                                    </div>
                                                    <div className="card-text">$ {product.price}</div>
                                                    <div className="card-text"><span className='text-success'>{product.rating.count || product.count}</span> Products available</div>
                                                    <div className="mt-auto text-center">
                                                        <button className="btn btn-warning mt-2" onClick={() => addToCart(product)}>Add to Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="d-flex justify-content-center align-items-center w-100 h-100">
                                        <p>No products match your search criteria.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
