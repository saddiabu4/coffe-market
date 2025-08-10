import Button from "../Button"

const MenuHero = () => {
	return (
		<div className='bg-primary overflow-hidden w-full h-[505px] flex items-center justify-center'>
			{/* Text */}
			<div className='flex gap-[32px] flex-col items-center justify-center'>
				<div className='flex flex-col items-center gap-[12px]'>
					<h1 className='font-calistoga font-[600] leading-[112%] text-8xl text-secondary w-[680px] h-[108px] text-center'>
						Menu
					</h1>
					<p className='w-full h-[23px] text-center tracking-[2%] text-secondary font-cabin text-[18px] leading-[128%]'>
						Handcrafted drinks and fresh pastries.
					</p>
				</div>
				{/* Button */}

				<div className='flex flex-row items-center justify-center gap-3'>
					<Button
						text='Our Locations'
						className='cursor-pointer px-4 py-3 bg-secondary text-primary rounded-3xl font-cabin'
					/>
					<Button
						text='About Us'
						className='cursor-pointer px-4 py-3 rounded-3xl border-1 border-secondary text-secondary'
					/>
				</div>
			</div>
		</div>
	)
}

export default MenuHero
