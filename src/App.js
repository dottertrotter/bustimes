import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/* Components Imports */
import RouteSelector from './components/route-selector';

function App() {
  return (
    <RouteSelector></RouteSelector>
  )
}

export default App;
