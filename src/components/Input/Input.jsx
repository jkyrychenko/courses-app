const Input = ({
	type = 'text',
	id,
	title,
	placeholder,
	value,
	inputClass,
	labelClass,
	handleChange,
}) => {
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
				onChange={handleChange}
			/>
		</>
	);
};

export default Input;
