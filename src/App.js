import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'

function App() {

	return (
		<Router>

			<div className="App">
				<Header />
				<Routes>

					<Route path="/" element={<Home />} />

				</Routes>
			</div>

		</Router>
	)
}

export default App