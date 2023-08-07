import { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Carousel/Carousel.css';

export default function Carousel(props) {
    const { pictures, pagination } = props;
    const [picture, setPicture] = useState(0);
    
    const handlePreviousPicture = () => {
        if(picture > 0) {
            setPicture(picture - 1);
        } else {
            setPicture(pagination-1);
        }
    }
    
    const handleNextPicture = () => {
        if(picture >= pagination-1) {
            setPicture(0);
        } else {
            setPicture(picture + 1);
        }
    }

    return (
        <figure className="carousel">
            <img 
                className="carousel__picture" 
                src={pictures[picture]} alt="Images du carousel"
            />
            <img 
                className="carousel__arrow carousel__arrow--left" 
                onClick={handlePreviousPicture} src="../src/assets/img/arrow-left.svg" 
                alt="arrow-left" 
                style={pagination === 1 ? {display: 'none'} : null}
            />
            <img 
                className="carousel__arrow carousel__arrow--right" 
                onClick={handleNextPicture} src="../src/assets/img/arrow-right.svg" 
                alt="arrow-right" 
                style={pagination === 1 ? {display: 'none'} : null}
            />
            <figcaption 
                className="carousel__page"
                style={pagination === 1 ? {display: 'none'} : null}>
                {picture+1}/{pagination}
            </figcaption>
        </figure>
    );
}

Carousel.propTypes = {
    pictures: PropTypes.array.isRequired,
    pagination: PropTypes.number.isRequired
};