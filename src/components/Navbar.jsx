// Navbar.jsx
import X from "../assets/X.svg"
function Navbar() {
	return (
		<div>
			<div className='w-full h-8 bg-[#FFECB8] flex items-center justify-between px-4'>
				<p className='text-sm relative left-1/2 transform -translate-x-1/2'>
					Buy one coffee, get one free — this week only (April 14–20)
				</p>
				<img
					src={X}
					alt='Cancel'
					className='cursor-pointer'
					width={20}
					height={20}
				/>
			</div>

			<nav></nav>
		</div>
	)
}

export default Navbar
