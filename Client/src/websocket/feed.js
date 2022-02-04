import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const WebSocketDemo = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('ws://localhost:3030');
  const [messageHistory, setMessageHistory] = useState([]);
  const [msg, setMsg] = useState("");

  const {
    sendMessage,
    lastMessage,
    readyState,
    
  } = useWebSocket(socketUrl, {reconnectInterval: 30000, reconnectAttempts: 500, retryOnError: true});


  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory(prev => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickSendMessage = () => {
    sendMessage(msg);
    lastMessage = msg;
  };

  const handleRefresh = () => {

    setSocketUrl(`ws://localhost:3030`);
  }

  const handleChange = (event) => {
      setMsg(event.target.value);
  }

  const handleClear = () => {
      setMsg("");
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
        <div>
            <button onClick={() => handleRefresh()} disabled={readyState === ReadyState.OPEN}> Refresh connection.</button>
        </div>
        <div>
            <input type="text" name="msg" value={msg} onChange={e => handleChange(e)}/>
        <button onClick={handleClear} >clear</button>
        </div>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Send
      </button>
      <div>
        <span>The WebSocket is currently {connectionStatus}</span>
      </div>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory
          .map((message, idx) => <span key={idx}>{message ? message.data : null}</span>)}
      </ul>
    </div>
  );
};