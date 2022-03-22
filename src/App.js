import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Wallet from "./components/WalletSection/Wallet";

function App() {
	return (
		<>
			<Header />
			<Main />
			<Wallet />
			<Footer />
		</>
	);
}

export default App;
