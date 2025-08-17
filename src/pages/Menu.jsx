import Footer from "../components/Footer"
import FooterBanner from "../components/FooterBanner"
import HeroSection from "../components/HeroSection"
import MenuCategory from "../components/Menu/MenuCategory"
import Navbar from "../components/Navbar"
import ScrollTicker from "../components/ScrollTicker"

const Menu = () => {
	return (
		<section id='#menu'>
			<Navbar />
			{/* Bu yerga Ibrohimjon kod yozadi */}
			<HeroSection
				title={"Menu"}
				subtitle={"Handcrafted drinks and fresh pastries."}
				buttons={[
					{ text: "Our Locations", className: "btn_primary", to: "/location" },
					{ text: "About Us", className: "btn_outline", to: "/about" },
				]}
			/>
			<ScrollTicker />
			<MenuCategory />
			<FooterBanner />
			<ScrollTicker />
			<Footer />
		</section>
	)
}

export default Menu
