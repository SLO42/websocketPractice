import React from "react";
import PropTypes from "prop-types";
export default class Feed extends React.Component {

	static propTypes = {
		messageHistory: PropTypes.arrayOf(PropTypes.object)
	};

	MsgItem = (data) => {
		const msgData = JSON.parse(data.data.data);
		console.log(msgData);
		msgData.date = msgData.date ? new Date(msgData.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
		return (
			<li>
				<span>
					{msgData.user ? `| ${msgData.user} | `: null }
					{`"${msgData.msg}" : ${msgData.date}`}

				</span>
			</li>
		);
	};

	render() {
		const { messageHistory } = this.props;
		return (
			<ul>
				{messageHistory !== null && messageHistory.length ? messageHistory.map((data, key) => <this.MsgItem data={data} key={key} />) : null}
			</ul>
		);
	}
}
