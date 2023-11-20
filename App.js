import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PasswordRecovery from './components/PasswordRecovery';
import Register from './components/Register';
import Login from './components/login';

const App = () => {
	return (
		<Router>
			<div className="container-fluid">
				<Routes>
					<Route path="/Register" component={Register} />
					<Route path="/Password-recovery" component={PasswordRecovery} />
					<Route path="/" component={Login} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
