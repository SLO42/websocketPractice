import { Chat } from './websocket';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {


  const IndexRoute = () =>  <div className="App">
  <header className="App-header">
    <Chat />
  </header>

</div>
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexRoute />} />
      {/* <Route path="game"  */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
