import GraphItem from "./graph-item";

const Graph = ({ data }) => {

    if (data.length > 0) {
        return (
            <div className="graph-container">
                {data.map((el) => (
                    <GraphItem key={`${el.answer}`} styleData={el}/>
                ))}
            </div>
    )} else {
        return (
            <>
            </>
        );
    }
};

export default Graph;