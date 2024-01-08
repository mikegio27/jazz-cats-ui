import React, { useState, useEffect } from 'react';
import '../../styles/Banner.css';

const Banner = ({ images, interval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);
    return (
        <div className="banner">
            {images.map((image, index) => (
                <img
                    key={image}
                    src={image}
                    alt={`Slide ${index}`}
                    style={{ 
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 1s ease-in-out'
                    }}
                />
            ))}
        </div>
    );
};

export default Banner;
