import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'

function App() {

	return (
		<Router>

			<div className="App">
				<Header />
				<main className="main">
					<Routes>

						<Route path="/" element={<Home />} />

					</Routes>
				</main>
			</div>

		</Router>
	)
}

export default App