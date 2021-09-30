const Button = (props) => {
	const color = props.color ? props.color : 'info';

	return (
		<button className={`btn btn-${color} text-nowrap`} onClick={props.action}>
			{props.title}
		</button>
	);
};

export default Button;
