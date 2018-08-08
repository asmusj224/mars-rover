import React from 'react';
import './ImageGallery.component.css';

const ImageGallery = ({ roverImages = [] }) => {
    roverImages = roverImages.map(roverImage => {
        return (<li className="image-gallery__item" key={roverImage.id}>
            <img className="image-gallery__image" src={roverImage.img_src} alt={roverImage.rover.name} />
            <span className="image-gallery__description">{roverImage.rover.name} - {roverImage.camera.full_name}</span>
        </li>)
    });


    return (
        <div className="image-gallery">
            <ul className="image-gallery__list">{roverImages}</ul>
        </div>
    );
}

export default ImageGallery;