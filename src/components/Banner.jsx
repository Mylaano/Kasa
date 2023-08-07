import PropTypes from 'prop-types';
import '../styles/Banner/Banner.css';

const Banner = ({ imageUrl, altText, captionText }) => {
    return (
        <figure className="banner">
            <img src={imageUrl} alt={altText} />
            {captionText && <figcaption>{captionText}</figcaption>}
        </figure>
    );
}

Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    captionText: PropTypes.string,
};

export default Banner;