import Footer from "../components/Footer"
import FooterBanner from "../components/FooterBanner"
import MenuCategory from "../components/Menu/MenuCategory"
import MenuHero from "../components/Menu/MenuHero"
import Navbar from "../components/Navbar"
import ScrollTicker from "../components/ScrollTicker"

const Menu = () => {
	return (
		<section>
			<Navbar />
			{/* Bu yerga Ibrohimjon kod yozadi */}
			<MenuHero />
			<ScrollTicker />
			<MenuCategory />
			<FooterBanner />
			<ScrollTicker />
			<Footer />
		</section>
	)
}

export default Menu
