import React from "react";
import {ethers} from "ethers";
import BalanceShow from "../BalanceShow/BalanceShow";
import "./wallet.css";
import BtnIcon from "../../assets/btn-icon.png";
const Wallet = () => {
	
	const[wrappedWalletAddress, setWrappedWalletAddress] = React.useState('Connect Wallet');
	
	const connectMetaMaskHandler = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		// Prompt user for account connections
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const walletaddress = await signer.getAddress();
		setWrappedWalletAddress(walletaddress.substr(0, 6) + '...' + walletaddress.substr(-3));
    }
	
	return (
		<section className="wallet" id="wallet">
			<div className="container">
				<h1>Greetings Spartans</h1>
				<h2>Welcome to the Armoury, Click below to log in.</h2>
				<div className="connect-btn">
					<div className="btn" onClick={() => connectMetaMaskHandler()}>
						<img src={BtnIcon} alt="BtnIcon" />
						{wrappedWalletAddress}
					</div>
				</div>
				{wrappedWalletAddress !=="Connect Wallet" ? <BalanceShow /> : null}
			</div>
		</section>
	);
};

export default Wallet;
