import PropTypes from 'prop-types';

const Messagebox = (props) => {
    return (
        <div className={"Messagebox".concat(props.isMine?" Mine":"")}>{`${props.messageContent}`}</div>
    )
};

Messagebox.propTypes = {
    messageContent: PropTypes.string,
};

Messagebox.defaultProps = {
    messageContent: "",
};

export default Messagebox;