import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Form from './pages/Form'
import Users from './pages/Users'
import Cards from './pages/Cards'
import Character from './pages/Character'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/form" element={<Form />} />
				<Route path="/users" element={<Users />} />
				<Route path="/cards" element={<Cards />} />
				<Route path="/character/:id" element={<Character />} />
			</Routes>
		</div>
	)
}

export default App
