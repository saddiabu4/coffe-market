import React from "react"
import Button from "../components/Button"
import Footer from "../components/Footer"
import FooterBanner from "../components/FooterBanner"
import ProductRender from "../components/ProductRender"
import ScrollTicker from "../components/ScrollTicker"
import { ProductCms } from "../constants"
import { useLocation, useParams } from "react-router-dom"

const ProductCMS = () => {
	const { id } = useParams()
	const location = useLocation()
	const product = location.state

	return (
		<section className=' bg-secondary/12' id='#product'>
			<div>
				{/* =-=-=-=-=-=-=-=-=- Header =-=-=-=-=-=-=-=-=*/}
				<div className='flex justify-center items-center px-10 pt-[180px] max-sm:px-6 max-sm:pt-[144px]'>
					<div className='flex flex-row justify-center items-center gap-[48px] w-[960px] max-sm:flex-col max-md:gap-6 max-sm:gap-8'>
						<div className='flex justify-center items-center bg-primary rounded-3xl w-[450px] h-[450px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[350px] max-sm:h-[350px]'>
							<img
								src='/images/coffe.png'
								alt=''
								className='w-[450px] h-[450px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[350px] max-sm:h-[350px]'
							/>
						</div>

						<div className='flex flex-col gap-[32px]'>
							<div className='flex flex-col gap-5'>
								<div className='flex flex-col max-md:gap-1'>
									<h1 className='font-calistoga text-[44px] text-primary max-md:text-4xl max-sm:text-[32px]'>
										{product.title}
									</h1>
									<p className='font-calistoga text-xl text-primary/70'>
										{product.cost}
									</p>
								</div>
								<p className='font-cabin text-[16px] w-[440px] text-primary max-md:w-[300px]'>
									Our Americano is made by combining rich, full-bodied espresso
									with hot water, creating a perfectly balanced and smooth cup
									that’s lighter than espresso but stronger than regular drip
									coffee.
								</p>
							</div>

							<div className='relative flex flex-col gap-6 w-full '>
								<div className='flex flex-col gap-3'>
									<div>
										<div className='absolute inset-x-0 border-t-1 border-primary/12' />
										<h3 className='font-calistoga text-[16px] text-primary/70 leading-[132%] tracking-[2%] pt-5'>
											Available Sizes
										</h3>
									</div>
									<div className='flex flex-row gap-1.5 '>
										<button className='px-2 py-1 border-1 border-primary/12 bg-primary/3 rounded-[6px] text-center font-cabin text-sm text-primary tracking-[3%] leading-[128%] cursor-pointer'>
											Small
										</button>
										<button className='px-2 py-1 border-1 border-primary/12 bg-primary/3 rounded-[6px] text-center font-cabin text-sm text-primary tracking-[3%] leading-[128%] cursor-pointer'>
											Medium (+$1.10)
										</button>
										<button className='px-2 py-1 border-1 border-primary/12 bg-primary/3 rounded-[6px] text-center font-cabin text-sm text-primary tracking-[3%] leading-[128%] cursor-pointer'>
											Large (+$1.65)
										</button>
									</div>
								</div>
								<div className='flex flex-col gap-4'>
									<div className='flex flex-col gap-3'>
										<div>
											<div className='absolute inset-x-0 border-t-1 border-primary/12' />
											<h3 className='font-calistoga text-[16px] text-primary/70 leading-[132%] tracking-[2%] pt-5'>
												Allergen Risks*
											</h3>
										</div>
										<div className='flex flex-row gap-1.5 '>
											<button className='px-2 py-1 border-1 border-primary/12 bg-primary/3 rounded-[6px] text-center font-cabin text-sm text-primary tracking-[3%] leading-[128%] cursor-pointer'>
												Milk
											</button>
											<button className='px-2 py-1 border-1 border-primary/12 bg-primary/3 rounded-[6px] text-center font-cabin text-sm text-primary tracking-[3%] leading-[128%] cursor-pointer'>
												Flavored Syrups
											</button>
											<button className='px-2 py-1 border-1 border-primary/12 bg-primary/3 rounded-[6px] text-center font-cabin text-sm text-primary tracking-[3%] leading-[128%] cursor-pointer'>
												Sulphites
											</button>
										</div>
									</div>
									<p className='font-cabin text-sm tracking-[3%] leading-[128%] text-primary/70'>
										* Let our team know if you have any allergies before
										ordering.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* =-=-=-=-=-=-=-=-=- Product Block =-=-=-=-=-=-=-=-=*/}
				<div className='px-10 py-40 flex flex-col justify-center items-center max-sm:gap-12 max-sm:py-[104px] max-sm:px-6'>
					<div className='flex flex-row justify-around items-center w-full max-sm:flex-col	max-sm:gap-6 max-sm:items-start'>
						<h1 className='font-calistoga text-[32px] text-primary max-sm:w-[200px]'>
							You’ll Love These Too
						</h1>
						<Button
							text={"Explore Menu"}
							className={
								"px-4 py-3 bg-primary rounded-4xl text-secondary max-sm:w-full text-center cursor-pointer"
							}
						/>
					</div>
					<ProductRender
						items={ProductCms}
						badge={1}
						className={
							"grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:px-6 "
						}
						line={false}
					/>
				</div>
				<FooterBanner />
				<ScrollTicker />
				<Footer />
			</div>
		</section>
	)
}

export default ProductCMS
