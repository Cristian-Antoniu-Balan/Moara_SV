const GraphItem = ({ styleData }) => {

    return (
        <div
            className="graph-element"
            style={{width: `${styleData.ratio}%`, opacity: `${styleData.opacity}%`}}
        ></div>
    );
};

export default GraphItem;