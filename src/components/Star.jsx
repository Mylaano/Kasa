import PropTypes from 'prop-types';
import '../styles/Rating/Rating.css';

export default function Star(props) {
    const { amount } = props;
    const ratingContent = [];

    for(let i = 0; i < 5; i++) {
        ratingContent.push(
            <li key={i} style={i < amount ? {filter: 'invert(47%) sepia(94%) saturate(2252%) hue-rotate(327deg) brightness(113%) contrast(105%)'} : null}>
                <img src="../src/assets/img/star-rating.svg" alt="Etoile" />
            </li>
        )
    }

    return <ul className="rating">{ratingContent}</ul>;
}

Star.propTypes = {
	amount: PropTypes.number.isRequired
};