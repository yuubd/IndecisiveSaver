import React from 'react';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signUpEmail: '',
			signUpName: '',
			signUpPassword: ''
		};
	}
	onEmailChange = (event) => {
		this.setState({ signUpEmail: event.target.value });
	};
	onNameChange = (event) => {
		this.setState({ signUpName: event.target.value });
	};
	onPasswordChange = (event) => {
		this.setState({ signUpPassword: event.target.value });
	};
	onSubmitSignUp = () => {
		fetch('http://localhost:3001/signup', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.signUpEmail,
				name: this.state.signUpName,
				password: this.state.signUpPassword
			})
		})
			.then((res) => res.json())
			.then((data) => {
				// data is user created from signUp
				if (data) {
					this.props.loadUserProfile(data);
					this.props.onRouteChange('home');
				}
			});
	};

	render() {
		return (
			<article className="pa4 black-80">
				<form action="sign-up_submit" method="get" acceptCharset="utf-8">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="ph0 mh0 fw6 clip">Sign Up</legend>
						<div className="mt3">
							<label className="db fw4 lh-copy f6" htmlFor="email-address">
								Email address
							</label>
							<input
								onChange={this.onEmailChange}
								className="pa2 input-reset ba bg-transparent w-100 measure"
								type="email"
								name="email-address"
								id="email-address"
							/>
						</div>
						<div className="mt3">
							<label className="db fw4 lh-copy f6" htmlFor="name">
								Name
							</label>
							<input
								onChange={this.onNameChange}
								className="pa2 input-reset ba bg-transparent w-95 measure"
								type="name"
								name="name"
								id="name"
							/>
						</div>
						<div className="mt3">
							<label className="db fw4 lh-copy f6" htmlFor="password">
								Password
							</label>
							<input
								onChange={this.onPasswordChange}
								className="b pa2 input-reset ba bg-transparent"
								type="password"
								name="password"
								id="password"
							/>
						</div>
					</fieldset>
					<div className="mt3 flex">
						<input
							onClick={this.onSubmitSignUp}
							className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
							type="submit"
							value="Sign Up"
						/>
					</div>
				</form>
			</article>
		);
	}
}

export default SignIn;
