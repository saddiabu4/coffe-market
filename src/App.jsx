// App.jsx
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ProductCMS from "./pages/ProductCMS"

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/menu' element={<Menu />} />
			<Route path='/product/:id' element={<ProductCMS />} />
		</Routes>
	)
}

export default App
