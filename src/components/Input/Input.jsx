const Input = (props) => {
	const type = props.type ? props.type : 'text';
	const inputClass = props.inputClass;
	const labelClass = props.labelClass;
	const id = props.id;
	const title = props.title;
	const placeholder = props.placeholder;
	const value = props.value;
	const change = props.change;

	return (
		<>
			{title && (
				<label htmlFor={id} className={`form-label ${labelClass}`}>
					{title}
				</label>
			)}
			<input
				type={type}
				id={id}
				className={`form-control ${inputClass}`}
				placeholder={placeholder}
				value={value}
				onChange={change}
			/>
		</>
	);
};

export default Input;
