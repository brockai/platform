import React, { FC } from 'react';
import PropTypes from 'prop-types';
import brockailogo from '../assets/logos/brockailogo.png';

interface ILogoProps {
	width?: number;
	height?: number;
}

const Logo: FC<ILogoProps> = ({ width, height }) => {
	return (
		<div>
			<img src={brockailogo} alt="Logo" height={height} />
		</div>
	);
};

Logo.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};
Logo.defaultProps = {
	width: 2155,
	height: 854,
};

export default Logo;
