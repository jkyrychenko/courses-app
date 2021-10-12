import PropTypes from 'prop-types';

const Message = ({ text }) => {
	return <div className='alert'>{text}</div>;
};

Message.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Message;
