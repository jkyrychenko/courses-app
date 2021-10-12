import PropTypes from 'prop-types';

const Button = ({
	color = 'info',
	type = 'button',
	customClass,
	title,
	handleClick,
}) => {
	return (
		<button
			type={type}
			className={`btn btn-${color} text-nowrap ${customClass}`}
			onClick={handleClick}
		>
			{title}
		</button>
	);
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	type: PropTypes.string,
	customClass: PropTypes.string,
	handleClick: PropTypes.func,
};

export default Button;
