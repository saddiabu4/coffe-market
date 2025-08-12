import React from "react"
import { items } from "../constants"

const ScrollTicker = () => {
	return (
		<div className='bg-secondary overflow-hidden'>
			<div className='flex animate-scroll gap-8 py-3'>
				{items.map((item, index) => (
					<div
						key={index}
						className='flex items-center gap-3 text-primary text-lg whitespace-nowrap'
					>
						<img
							src={item.icon}
							alt={item.text}
							// className='invert sepia saturate-[300%] hue-rotate-[90deg]'
							className='bg-green-900'
						/>
						<span>{item.text}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default ScrollTicker
