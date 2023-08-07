import PropTypes from 'prop-types';
import '../styles/Tag/Tag.css';

export default function Tag(props) {
    const { name } = props;
    return <li className="tag">{name}</li>;
}

Tag.propTypes = {
    name: PropTypes.string.isRequired
};