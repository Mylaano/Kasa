import PropTypes from 'prop-types';
import '../styles/Banner/Banner.css';

export default function Banner(props) {
    const { imageUrl, altText, captionText } = props;

    console.log(typeof captionText);

    const bannerStyle = {
        height: captionText === undefined ? "223px" : "",
    };

    if (captionText === undefined && window.innerWidth <= 375) {
        bannerStyle.height = "223px";
      }

    return (
        <figure className="banner" style={bannerStyle}>
            <img src={imageUrl} alt={altText} />
            {captionText && <figcaption>{captionText}</figcaption>}
        </figure>
    );
}

Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    captionText: PropTypes.string
};