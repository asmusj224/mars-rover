import React from 'react';
import './ImageOfTheDay.component.css';
const ImageOfTheDay = ({ roverImage, roverName, roverCameraName }) => {
    return (
        <div className="image-of-the-day">
            <img className="image-of-the-day__image" src={roverImage} alt={roverName} />
            <p className="image-of-the-day__rover">{roverName} - {roverCameraName}</p>
        </div>
    );
}

export default ImageOfTheDay;