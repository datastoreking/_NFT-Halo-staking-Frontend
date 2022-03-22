import React from "react";
import Logo1 from "../../assets/logo-1.png";
import Logo2 from "../../assets/logo-2.png";
import Logo3 from "../../assets/logo-3.png";
import Logo4 from "../../assets/logo-4.png";
import Logo5 from "../../assets/logo-5.png";
import Logo6 from "../../assets/logo-6.png";
import "./main.css";
const Main = () => {
	return (
		<section className="main" id="main">
			<div className="container">
				<div className="box">
					<div className="box-logo">
						<img src={Logo1} alt="logo-1" />
					</div>
					<div className="box-content">
						<h1>$1.17</h1>
						<h3>For 10,000 HALO</h3>
					</div>
				</div>
				<div className="box">
					<div className="box-logo">
						<img src={Logo2} alt="logo-1" />
					</div>
					<div className="box-content">
						<h1>94,739,498,313 HALO</h1>
						<span>($11,039,048)</span>
						<h3>Total Value Locked</h3>
					</div>
				</div>
				<div className="box">
					<div className="box-logo">
						<img src={Logo3} alt="logo-1" />
					</div>
					<div className="box-content">
						<h1>46,079</h1>
						<h3>Total Weapons</h3>
					</div>
				</div>
				<div className="box">
					<div className="box-logo">
						<img src={Logo4} alt="logo-1" className="img-resize" />
					</div>
					<div className="box-content">
						<h1>11,312,539,547 HALO</h1>
						<h3>Current Circulating Supply</h3>
					</div>
				</div>
				<div className="box">
					<div className="box-logo">
						<img src={Logo5} alt="logo-1" />
					</div>
					<div className="box-content">
						<h1>1,546,332,757 HALO</h1>
						<span>($180,179)</span>
						<h3>Total Emission Per Day</h3>
					</div>
				</div>
				<div className="box">
					<div className="box-logo">
						<img src={Logo6} alt="logo-1" />
					</div>
					<div className="box-content">
						<h1>244,063,363 HALO</h1>
						<span>($28,438)</span>
						<h3>Burned From Service Fees</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;
