import React, { useEffect, useState } from 'react';
import './Slideshow.scss';
import msi1 from './img/msi1.png';
import msi2 from './img/msi2.png';
import msi5 from './img/msi5.jpg';
import msi3 from './img/msi3.png';
import msi4 from './img/msi4.jpeg';

const images = [
    msi1,
    msi2,
    msi5,
    msi3,
    msi4
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3000ms = 3s

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt="slideshow" style={{ opacity: 1 }} />
            <button className="prev" onClick={goToPrevious}>❮</button>
            <button className="next" onClick={goToNext}>❯</button>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
