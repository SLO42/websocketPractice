import React from "react";

export const Feed = ({messageHistory}) => {

    const MsgItem = (data) => {
        const msgData = JSON.parse(data.data.data);
        console.log(msgData)
        return (
            <li>
                <div>
                    {msgData.user} 
                </div>
                <div>
                    {msgData.msg} 
                </div>
                <div>
                    {msgData.date}
                </div>
            </li>
        )
    }

    return (
        <ul>
            {messageHistory !== null && messageHistory.length ? messageHistory.map((data) => <MsgItem data={data} />) : null}
        </ul>
    )
}