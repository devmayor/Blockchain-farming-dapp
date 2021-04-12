import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components'
import { Zap, Admin } from "./pages";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch >
          <Route exact path="/" component={Zap} />
          <Route path="/admin" component={Admin} />
        </Switch >
      </Router>
    </div>
  );
}

export default App;
