const Culoare = (props) =>{

    const remove = () => {
        props.removable(props.id);
    }

    return(
        <div className="culoare">
            <div className="text" style={{backgroundColor: props.gradientColor}}>{`${props.gradientColor}`}</div>
            <button className="del-button" onClick={remove}>Delete</button>
        </div>
    )
}

export default Culoare;