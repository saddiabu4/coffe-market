import { Link } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import { LocationTexts } from "../constants"
import ScrollTicker from "../components/ScrollTicker"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Location = () => {
	return (
		<section className='bg-primary' id='#location'>
			<div>
				<div>
					<div>
						<Navbar />
						<HeroSection
							title={"Locations"}
							subtitle={"Find your nearest Brewhaus location."}
						/>
					</div>
					<div className='px-10 pb-40 pt-0 mt-0 max-sm:px-6 max-sm:pb-[104px] flex flex-col gap-[104px]'>
						{/* Locations */}
						<div>
							<div className='grid grid-cols-2 gap-6 justify-center max-md:grid-cols-1'>
								<div className='w-full'>
									<img src='/images/Map.png' alt='map' />
								</div>
								<div className='grid grid-cols-2 gap-6 max-md:order-first max-sm:grid-cols-1 max-sm:gap-4'>
									{LocationTexts.location.map((item, index) => (
										<div
											className='flex flex-col justify-between bg-white gap-5 p-6 rounded-3xl'
											key={index}
										>
											<div className='flex flex-col gap-4'>
												<p className='text-primary/70 font-cabin text-sm leading-[128%] tracking-[3%]'>
													{item.subtitle}
												</p>
												<div className='flex flex-col gap-1.5 '>
													<h2 className='text-primary font-calistoga text-xl leading-[132%] tracking-[2%] w-full max-w-[170px] max-sm:text-lg'>
														{item.title}
													</h2>
													<p className='text-primary/70 font-cabin text-sm leading-[128%] tracking-[3%]'>
														{item.hourText}
													</p>
												</div>
											</div>
											<Link className='btn_secondary'>Get Directions</Link>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Contact */}
						<div className='flex flex-col gap-10'>
							<div className='flex items-center justify-center'>
								<h1 className='font-calistoga text-[32px] font-bold text-secondary max-sm:text-2xl'>
									Need Help?
								</h1>
							</div>
							<div>
								<div className='grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4'>
									{LocationTexts.contact.map((item, index) => (
										<div
											className='flex flex-col gap-2 p-6 rounded-[20px] bg-white/7 text-secondary'
											key={index}
										>
											<p className='font-cabin text-sm'>{item.subtitle}</p>
											<h2 className='font-calistoga text-xl font-bold'>
												{item.title}
											</h2>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<ScrollTicker />
					<Footer />
				</div>
			</div>
		</section>
	)
}

export default Location

{
	/* <div className='flex flex-col gap-4' key={index}>
											<p className='text-primary/70 font-cabin text-sm leading-[128%] tracking-[3%]'>
												{item.subtitle}
											</p>
											<div className='flex flex-col gap-1.5 '>
												<h2 className='text-primary font-calistoga text-[16px] leading-[132%] tracking-[2%] '>
													{item.title}
												</h2>
												<p className='text-primary/70 font-cabin text-sm leading-[128%] tracking-[3%]'>
													{item.hourText}
												</p>
											</div>
										</div> */
}
