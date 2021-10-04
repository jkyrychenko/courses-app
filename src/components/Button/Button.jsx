const Button = (props) => {
	const color = props.color ? props.color : 'info';
	const type = props.type ? props.type : 'button';
	const customClass = props.customClass;
	const title = props.title;
	const action = props.action;

	return (
		<button
			type={type}
			className={`btn btn-${color} text-nowrap ${customClass}`}
			onClick={action}
		>
			{title}
		</button>
	);
};

export default Button;
