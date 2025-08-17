import { Link } from "react-router-dom"

const HeroSection = ({ title, subtitle, buttons }) => {
	return (
		<div className='bg-primary overflow-hidden w-full h-[505px] flex items-center justify-center'>
			<div className='flex gap-[32px] flex-col items-center justify-center w-[680px] h-[108px] max-sm:w-[312px]'>
				{/* Text */}
				<div className='flex flex-col items-center gap-[12px]'>
					<h1 className='font-calistoga font-[600] leading-[112%] text-8xl text-secondary  text-center max-sm:text-[48px] max-md:text-[80px] '>
						{title}
					</h1>
					<p className='w-full h-[23px] text-center tracking-[2%] text-secondary font-cabin text-[18px] leading-[128%]'>
						{subtitle}
					</p>
				</div>

				{/* Button */}
				{buttons ? (
					<div className='flex flex-row items-center justify-center gap-3 max-sm:w-full max-sm:flex max-sm:flex-col'>
						{buttons.map((button, index) => (
							<Link to={button.to} className={button.className} key={index}>
								{button.text}
							</Link>
						))}
					</div>
				) : (
					""
				)}
			</div>
		</div>
	)
}

export default HeroSection
