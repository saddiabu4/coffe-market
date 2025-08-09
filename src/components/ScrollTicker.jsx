import React from "react"
import { items } from "../constants"

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
