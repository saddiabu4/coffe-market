import React from "react"
// import { items } from "../constants"

const items = [
	{ icon: "/images/Smiley.png", text: "Great Coffee" },
	// { icon: Bolt, text: "Fast Service" },
	// { icon: Instagram, text: "Cozy Space" },
	// { icon: Waterdrop, text: "Handcrafted Drinks" },
	// { icon: Element, text: "Local Roasts" },
	// { icon: Crown, text: "Global Flavor" },
	// { icon: SmileyLove, text: "Friendly Baristas" },
]

const ScrollTicker = () => {
	return (
		<div className='bg-secondary overflow-hidden'>
			<div className='flex animate-scroll gap-8 py-3'>
				{items.map((item, index) => (
					<div
						key={index}
						className='flex items-center gap-2 text-primary text-lg whitespace-nowrap'
					>
						<span className='text-xl'>{item.icon}</span>
						<span>{item.text}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default ScrollTicker
