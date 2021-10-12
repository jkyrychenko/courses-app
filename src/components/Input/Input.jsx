import PropTypes from 'prop-types';

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

Input.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string,
	type: PropTypes.string,
	inputClass: PropTypes.string,
	labelClass: PropTypes.string,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default Input;
