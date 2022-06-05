const FeedbackItem = (props) => {

    return(
        <div
            className={`feedback-item`.concat((props.selected)?` selected`:``)}
            style={{backgroundColor: `${props.color}`}}
            onClick={() => {props.selectCard(props.atGrid)}}>
                {props.feedback}
        </div>
    )
}

export default FeedbackItem;
