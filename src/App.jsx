// App.jsx
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ProductCMS from "./pages/ProductCMS"
import Location from "./pages/Location"

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/menu' element={<Menu />} />
			<Route path='/product/:id' element={<ProductCMS />} />
			<Route path='/location' element={<Location />} />
		</Routes>
	)
}

export default App
