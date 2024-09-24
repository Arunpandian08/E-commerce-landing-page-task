import React from 'react'

const FilterCard = ({ categories, selectedCategories, handleCategoryChange }) => {
    return (
        <div className="col-lg-3 col-md-4 filter-column">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                    <h5 className="card-title">Filter</h5>
                    {categories.map(category => (
                        <div className="mb-3" key={category}>
                            <label htmlFor={`category-${category}`}
                                className="form-label d-flex justify-content-between align-items-center gap-3">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                <input
                                    type="checkbox"
                                    id={`category-${category}`}
                                    name={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                />
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterCard