import { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/Collapse/Collapse.css';

const Collapse = ({ title, text }) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className={`collapse ${isCollapsed ? '' : 'collapse--active'}`}>
			<div className="collapse__header" onClick={toggleCollapse}>
				<p className="collapse__title">{title}</p>
				<img className="collapse__icon" src="../src/assets/img/arrow_down.svg" alt="Flèche vers le bas" />
			</div>
			<div className="collapse__content">
				<p>{text}</p>
			</div>
		</div>
	);
};

Collapse.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.any.isRequired
};

export default Collapse;
