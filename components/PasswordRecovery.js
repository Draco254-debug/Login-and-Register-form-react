import axios from 'axios';
import React, { useState } from 'react';

const PasswordRecovery = () => {
	const [email, setEmail] = useState('');
	const [code, setCode] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [isCodeSent, setIsCodeSent] = useState(false);

	const handleSendCode = async () => {
		try {
			//Send a request to the server to initiate the password recovery process
			const response = await axios.post(
				'http://localhost:3000/api/forgotPassword',
				{
					email,
				}
			);
			console.log('Code sent:', response.data);
			setIsCodeSent(true);
		} catch (error) {
			console.error('Error sending code:', error.response.data);
		}
	};
	const handleChangePassword = async () => {
		try {
			//Send a request to the server to change the password
			const response = await axios.post(
				'http://localhost:3000/api/changePassword',
				{
					email,
					code,
					newPassword,
				}
			);
			console.log('Password changed:', response.data);
			//Handle successful password change, e.g., redirect to login page
		} catch (error) {
			console.error('Error changing password:', error.response.data);
			//Handle password change error
		}
	};
	return (
		<div className="container mt-5">
			<h2 className="mb-4">Password Recovery</h2>
			{isCodeSent ? (
				<div>
					<p className="mb-3">Please check your email for the 6-digit code.</p>
					<form>
						<div className="mb-3">
							<lable htmlFor="code" className="form-lable">
								Code
							</lable>
							<input
								type="text"
								id="code"
								className="form-control"
								value={code}
								onChange={(e) => setCode(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<lable htmlFor="newPassword" className="form-lable">New Password:</lable>
							<input
								type="password"
                        id="newPassword"
                        className="form-control"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								required
							/>
						</div>
						<div>
							<button type="button" className="btn btn-primary" onClick={handleChangePassword}>
								Change Password
							</button>
						</div>
					</form>
				</div>
			) : (
				<div>
					<p className="mb-3">
						Enter your email address to receive a 6-digit password recovery code
						to reset your password.
					</p>
					<form>
						<div className="mb-3">
							<lable htmlFor="email" className="form-lable">Email:</lable>
							<input
								type="email"
                        id="email"
                        className="form-control"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div>
							<button type="button" className="btn btn-primary" onClick={handleSendCode}>
								Send Code
							</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default PasswordRecovery;
