import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/index.css';

import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/404';
import HousingPage from './pages/housing';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/housing/:id" component={HousingPage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</Router>
	);
}