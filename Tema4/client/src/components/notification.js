import { useEffect, useState } from "react";

const Notification = (props) => {

    const [hidden, setHidden] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        setTimeout(() => {
          setHidden(true);
        }, 5000);
      }, [hidden])

    props.socket.on("userMessage", (sender) => {
        setTimeout(() => {setHidden(false)}, 500);
        setUser(sender);
    });

    return (
        <div className={"Notification".concat(hidden?" hidden":"")}>
            <b>{`${user}`}</b> <i>{`sent a message`}</i>
        </div>
    )
};

export default Notification;
