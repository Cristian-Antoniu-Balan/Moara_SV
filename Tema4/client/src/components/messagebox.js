import PropTypes from 'prop-types';

const Messagebox = (props) => {
    return (
        <div className="Messagebox">{`${props.messageContent}`}</div>
    )
};

Messagebox.propTypes = {
    messageContent: PropTypes.string,
};

Messagebox.defaultProps = {
    messageContent: "",
};

export default Messagebox;
