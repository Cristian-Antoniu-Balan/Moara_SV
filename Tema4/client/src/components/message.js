import PropTypes from 'prop-types';

const Message = (props) => {
    return (
        <div className="Message">{`${props.messageContent}`}</div>
    )
};

Message.propTypes = {
    messageContent: PropTypes.string,
};

Message.defaultProps = {
    messageContent: "",
};

export default Message;
