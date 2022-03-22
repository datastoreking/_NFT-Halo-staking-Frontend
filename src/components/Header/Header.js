import React from "react";
import Logo from "../../assets/logo.png";
import BtnIcon from "../../assets/btn-icon.png";
import "./header.css";
const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="logo">
					<img src={Logo} alt="logo" />
					<h1>Halo</h1>
				</div>
				<div className="header-btn">
					<a href="" className="btn">
						<img src={BtnIcon} alt="BtnIcon" />
						Get HALO
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
