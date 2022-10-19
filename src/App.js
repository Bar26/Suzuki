import { HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Footer } from './cmps/Footer'
import { CarListPage } from './pages/CarListPage'

function App() {

	return (
		<HashRouter>

			<div className="App">
				<Header />
				<main className="main">
					<Routes>

						<Route path="/" element={<Home />} />
						<Route path="/cars" element={<CarListPage />} />

					</Routes>
				</main>
				<Footer />
			</div>

		</HashRouter>
	)
}

export default App