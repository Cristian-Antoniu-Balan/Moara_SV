import ListBar from "./list-bar";

const List = ({ data }) => {
    
    if (data.length > 0) {
        return (
            <div className="list-container">
                {data.map((el, index) => (
                    <div key={`${el.answer}`}>
                        <ListBar wide={`${el.ratio}`} opp={`${el.opacity}`}/>
                        <span>
                            {`${el.answer}`}
                        </span>
                        </div>
                ))}
            </div>
        )} else {
            return (
                <></>
            )
        }
}

export default List;