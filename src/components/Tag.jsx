import PropTypes from 'prop-types';

export default function Tag(props) {
    const { name } = props;
    return <li>{name}</li>;
}

Tag.propTypes = {
    name: PropTypes.string.isRequired
};