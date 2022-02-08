import React from "react";

export const Feed = ({messageHistory}) => {

    const MsgItem = (data) => {
        const msgData = JSON.parse(data.data.data);
        console.log(msgData)
        msgData.date = msgData.date ? new Date(msgData.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return (
            <li>
                <span>
                    {msgData.user ? `| ${msgData.user} | `: null }
                    "{msgData.msg}" {msgData.date}

                </span>
            </li>
        )
    }

    return (
        <ul>
            {messageHistory !== null && messageHistory.length ? messageHistory.map((data) => <MsgItem data={data} />) : null}
        </ul>
    )
}