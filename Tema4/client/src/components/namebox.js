import PropTypes from 'prop-types';

const Namebox = (props) => {
    return (
        <div className={"Namebox".concat(props.isHidden?" hiddenName":"")}>{`${props.userName}`}</div>
    )
};

Namebox.propTypes = {
    userName: PropTypes.string,
  };
  
Namebox.defaultProps = {
    userName: "anonymous",
  };

export default Namebox;