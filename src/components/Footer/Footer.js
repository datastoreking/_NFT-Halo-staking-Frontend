import React from "react";
import Logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.png";
import Discord from "../../assets/discord.png";
import Twitter from "../../assets/twitter.png";
import Telegram from "../../assets/telegram.png";
import "./footer.css";
const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-container">
					<div className="content-area">
						<div className="footer-logo">
							<img src={Logo} alt="logo" />
							<h1>Halo</h1>
						</div>
						<p>
							This does not constitute an offer to sell, nor a solicitation of
							an offer to buy, any securities by any person in any jurisdiction
							in which it is unlawful for such person to make such an offering
							or solicitation. Neither the Securities and Exchange Commission
							nor any other regulThe information provided on this website does
							not constitute investment advice, financial advice, trading
							advice, or any other sort of advice, and you should not treat any
							of the website's content as such. The HALO team provides the
							website as a service to the public, and is not responsible for,
							and expressly disclaims all liability for, damages of any kind
							arising out of use, reference to, or reliance on any information
							contained within this website. While the information contained
							within this website is periodically updated, no guarantee is given
							that the information provided on this website is correct,
							complete, and up-to-date.
						</p>
						<span>VERSION 1.2.8</span>
					</div>
					<div className="footer-links">
						<h3>HALO</h3>
						<ul>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> What is HALO?
								</a>
							</li>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> Get HALO
								</a>
							</li>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> Trading Chart
								</a>
							</li>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> Smart Contracts
								</a>
							</li>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> Liquidity Lock
								</a>
							</li>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> Whitepaper
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-links">
						<h3>Community</h3>
						<ul>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> Coingecko
								</a>
							</li>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> CoinMarketCap
								</a>
							</li>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> Twitter
								</a>
							</li>

							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> Telegram
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-links">
						<h3>Questions?</h3>
						<ul>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i> Telegram DM
								</a>
							</li>
							<li>
								<a href="">
									<i className="fa fa-chevron-right"></i>E-mail
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="copyright-wrap">
				<div className="container">
					<p>
						Copyright © 2022 HALO Labs. All Rights Reserved. / Privacy Policy ·
						Terms of Service
					</p>
					<div className="social-links">
						<ul>
							<li>
								<a href="">
									<img src={Instagram} alt="Instagram" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={Discord} alt="Discord" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={Twitter} alt="Twitter" />
								</a>
							</li>
							<li>
								<a href="">
									<img src={Telegram} alt="Telegram" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
