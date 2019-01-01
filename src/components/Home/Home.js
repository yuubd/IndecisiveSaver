import React from 'react';
import { Link } from 'react-router-dom';
import coverUrl from './cover.png';
import './Home.css';

const Home = () => {
	const style1 = { backgroundImage: `url(${coverUrl})` };
	return (
		<header className="sans-serif">
			<div className="cover bg-left bg-center-l" style={style1}>
				<div className="bg-black-50 pb24-m">
					<nav className="dt w-100 bg-black-60 mw8 center">
						<div className="dtc w2 v-mid pa3">
							<a
								href="/"
								className="dib w2 h2 pa0 ba b--white-90 grow-large border-box"
							>
								<svg
									className="link white-90 hover-white"
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									xlink="http://www.w3.org/1999/xlink"
									width="32px"
									height="32px"
									viewBox="0 0 32 32"
									enable-background="new 0 0 32 32"
									space="preserve"
									fill="#ffffff"
								>
									<image
										className="pa0 logo-img"
										width="30"
										height="30"
										x="0"
										y="0"
										href={require(`${'./hamburger.png'}`)}
									/>
								</svg>
							</a>
						</div>
						<div className="dtc v-mid tr pa3">
							<a
								className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
								href="/"
							>
								How it Works
							</a>
							<a
								className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
								href="/signup/"
							>
								Sign Up
							</a>
						</div>
					</nav>
					<div className="tc">
						<div className="tc-l mt4 mt5-m mt6-l ph3">
							<h1 className="f2 f1-l fw2 white-90 mb0 lh-title">TruViews</h1>
							<h2 className="fw1 f3 white-80 mt3 mb4">
								Now only consider reviews from your trustful source
							</h2>
							<Link
								className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
								to="/signin/"
							>
								LogIn
							</Link>
							<span className="dib v-mid ph3 white-70 mb3">or</span>
							<Link
								className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"
								to="/signin/"
							>
								LogIn
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Home;
