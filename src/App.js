import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NavBar from "./Components/NavBar";

function App() {
	return (
    <Router>
      <NavBar/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contact" component={Contact} />
				<Route path="/about" component={About} />
			</Switch>
		</Router>
	);
}

export default App;
