import logo from './logo.svg';
import useWebSocket from 'react-use-websocket';
import { WebSocketDemo } from './websocket';
import './App.css';

function App() {
  // const socketUrl = 'ws://localhost:3030/';
  // const {
  //   sendMessage,
  //   sendJsonMessage,
  //   lastMessage,
  //   lastJsonMessage,
  //   readyState,
  //   getWebSocket
  // } = useWebSocket(socketUrl, {
  //   onOpen: () => console.log('opened'),
  //   //Will attempt to reconnect on all close events, such as server shutting down
  //   shouldReconnect: (closeEvent) => true,
  // });

  // const onClick = () => {
  //   console.log(readyState);
  //   sendJsonMessage({obj1: "test", obj2: "nope"});
  // }

  return (
    <div className="App">
      <header className="App-header">
        <WebSocketDemo />
      </header>

    </div>
  );
}

export default App;
