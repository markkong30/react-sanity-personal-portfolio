import "./App.scss";
import { About, Contact, Header, Skills, Testimonial, Work, Footer } from "./containers";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonial />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
