import React from 'react'
import img1 from '../../../assets/image-1.png'
import img2 from '../../../assets/image-2.png'
import img3 from '../../../assets/image-3.png'

const Carousel = () => {
    const carouselItems = [
        { id: 1, image: img1, alt: 'First slide' },
        { id: 2, image: img2, alt: 'Second slide' },
        { id: 3, image: img3, alt: 'Third slide' },
    ]

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                    <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={item.image} className="d-block w-100" alt={item.alt} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel