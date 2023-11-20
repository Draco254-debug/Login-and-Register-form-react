import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		try {
			const response = await axios.post('http://localhost:3000/api/login', {
				email: email,
				password: password,
			});
			console.log('Login response:', response.data);
			//Handle successful login, e.g., store the token in state or local storage
		} catch (error) {
			console.error('login error:', error.response.data);
			//Handle login error
		}
	};
	return (
		<div className="container mt-5">
			<h2 className="mb-4">Login</h2>
			<form>
				{/*Form fields and submit button*/}
				<div className="mb-3">
					<lable htmlFor="email" className="form-lable">
						Email:
					</lable>
					<input
						type="email"
						id="email"
						className="form-control"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<lable htmlFor="password" className="form-lable">
						Password:
					</lable>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div>
					<button type="button" className="btn btn-primary" onClick={handleLogin}>
						Login
					</button>
				</div>
			</form>
			<p className="mb-3">
				Not Registered? <Link to="/Register">Sign up</Link>
            <br>
               <link to="/password-recovery">Forgot password?</link>
            </br>
			</p>
		</div>
	);
};

export default Login;
