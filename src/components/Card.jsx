import '../styles/Card/Card.css';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Card = ({ title, imageUrl, link }) => {
    return (
        <Link to={link} className="card">
            <figure>
                <img src={imageUrl} alt={title} />
                <figcaption>{title}</figcaption>
            </figure>
        </Link>
    );
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Card;