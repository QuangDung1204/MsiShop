import React from 'react';
import './ImageList.scss';

const images = [
    'https://file.hstatic.net/200000722513/file/layout_web_-03.png',
    'https://file.hstatic.net/200000722513/file/layout_web_-01.png',
    'https://file.hstatic.net/200000722513/file/gearvn-voucher-9-9-subbanner.png'
];

const ImageList = () => {
    return (
        <div className="image-list">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`image-${index}`} />
            ))}
        </div>
    );
};

export default ImageList;
