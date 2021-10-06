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

export default Button;
