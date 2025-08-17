// import Button from "./Button"

import { Link } from "react-router-dom"

const FooterBanner = () => {
	return (
		<section className='w-full h-auto bg-primary/3 py-[96px] px-[80px] border-1 border-primary/12 max-sm:py-[70px] max-sm:px-[24px]'>
			<div className='w-full flex justify-center items-center'>
				<div className='flex flex-col gap-[40px] justify-center items-center w-[1200px] h-[250px]'>
					{/* =-=-=-=-=-=-=-=-=- Text =-=-=-=-=-=-=-=-=*/}
					<div className='flex-col flex justify-center items-center gap-5'>
						<div className='bg-primary w-[48px] h-[48px] max-sm:w-[40px] max-sm:h-[40px]'>
							<img
								src='/images/Hands.png'
								alt='#'
								className='w-[48px] h-[48px] max-sm:w-[40px] max-sm:h-[40px]'
							/>
						</div>
						<div className='text-primary flex flex-col justify-center items-center gap-2'>
							<h1 className='font-calistoga text-[32px] leading-[116%] max-sm:text-2xl '>
								Order Online
							</h1>
							<p className='font-cabin text-lg leading-[128%] tracking-[2%]'>
								Get your favorites delivered fast.
							</p>
						</div>
					</div>

					{/* =-=-=-=-=-=-=-=-=- Button =-=-=-=-=-=-=-=-=*/}
					<div className='flex flex-row items-center justify-center gap-3 max-sm:gap-2.5'>
						<Link className='btn_img'>
							<img src='/images/Uber Eats.svg' alt='#' />
						</Link>
						<Link className='btn_img'>
							<img src='/images/Grubhub.svg' alt='#' />
						</Link>
						<Link className='btn_img'>
							<img src='/images/Doordash.svg' alt='#' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FooterBanner
