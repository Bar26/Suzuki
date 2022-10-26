import { HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Footer } from './cmps/Footer'
import { CarListPage } from './pages/CarListPage'
import { CarDetails } from './pages/CarDetails'
import { PurchaseProcess } from './pages/PurchaseProcess'
import { ContactUsPage } from './pages/ContactUsPage'

function App() {

	return (
		<HashRouter>

			<div className="App">
				<Header />
				<main className="main">
					<Routes>

						<Route path="/" element={<Home />} />
						<Route path="/cars" element={<CarListPage />} />
						<Route path="/cars/:carId" element={<CarDetails />} />
						<Route path="/purchase-process" element={<PurchaseProcess />} />
						<Route path="/contact-us" element={<ContactUsPage />} />

					</Routes>
				</main>
				<Footer />
			</div>

		</HashRouter>
	)
}

export default App