import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleRegister = async () => {
		try {
			const response = await axios.post('http://localhost:3000/api/register', {
				email,
				password,
				firstName,
			});
			console.log('Register response:', response.data);
			//Handle successful registration, e.g., redirect to login page
		} catch (error) {
			console.error('Register error:', error.response.data);
			//Handle registration error
		}
	};

	return (
		<div className="container mt-5">
			<h2 className="mb-4">Register</h2>
			<form>
				{/*Form fields and submit button*/}
				<div className="mb-3">
					<lable htmlFor="email" className="form-lable">
						Email:
					</lable>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<lable htmlFor="password" className="form-lable">
						Password
					</lable>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<lable htmlFor="firstName" className="form-lable">
						First Name
					</lable>
					<input
						type="text"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</div>
				<div>
					<lable htmlFor="lastName" className="form-lable">
						Last Name:
					</lable>
					<input
						type="text"
						id="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</div>
				<div>
					<button
						type="button"
						className="btn btn-primary"
						onClick={handleRegister}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
