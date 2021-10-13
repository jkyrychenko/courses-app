import PropTypes from 'prop-types';

const Message = ({ text, type = 'light' }) => {
	return <div className={`mt-4 alert alert-${type}`}>{text}</div>;
};

Message.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Message;
