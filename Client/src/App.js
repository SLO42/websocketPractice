import { Chat } from "./websocket";
import "./App.css";

function App() {


	const IndexRoute = () => 
		<div className="App">
			<header className="App-header">
				<Chat />
			</header>
		</div>;
	return (
		<IndexRoute />
	);
}

export default App;
