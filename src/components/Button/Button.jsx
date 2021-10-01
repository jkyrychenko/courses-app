const Button = (props) => {
	const color = props.color ? props.color : 'info';
	const type = props.type ? props.type : 'button';
	const customClass = props.customClass;

	return (
		<button
			type={type}
			className={`btn btn-${color} text-nowrap ${customClass}`}
			onClick={props.action}
		>
			{props.title}
		</button>
	);
};

export default Button;
