import React from "react"
import { MenuProduct } from "../../constants"
import ProductRender from "../ProductRender"

const MenuCategory = () => {
	return (
		<section className='py-[120px] px-[40px] max-sm:py-[104px] max-sm:px-[24px] bg-secondary/50'>
			<div className='flex gap-6 max-md:flex-col max-md:gap-[64px]'>
				{/* =-=-=-=-=-=-=-=-=- Left Section =-=-=-=-=-=-=-=-= */}
				<div>
					<div className='flex flex-col gap-5 sticky top-16 max-md:flex-row max-sm:overflow-x-scroll'>
						<div className='flex flex-row items-center gap-5 w-[282px] h-auto'>
							<div className='bg-primary rounded-4xl w-[56px] h-auto'>
								<img src='/images/coffe.png' alt='#' className='rounded-4xl' />
							</div>
							<p className='font-calistoga text-xl text-primary'>Coffee</p>
						</div>
						<div className='flex flex-row items-center gap-5 w-[282px] h-auto'>
							<div className='bg-primary rounded-4xl w-[56px] h-auto'>
								<img
									src='/images/coffe-drinks.png'
									alt='#'
									className='rounded-4xl'
								/>
							</div>
							<p className='font-calistoga text-xl text-primary'>Cold Drinks</p>
						</div>
						<div className='flex flex-row items-center gap-5 w-[282px] h-auto'>
							<div className='bg-primary rounded-4xl w-[56px] h-auto'>
								<img src='/images/bakery.png' alt='#' className='rounded-4xl' />
							</div>
							<p className='font-calistoga text-xl text-primary'>Bakery</p>
						</div>
					</div>
				</div>
				{/* =-=-=-=-=-=-=-=-=- Right Section =-=-=-=-=-=-=-=-=*/}
				<div className='flex flex-col gap-[64px]'>
					<ProductRender
						title={"Coffee"}
						quantity={"9 items"}
						items={MenuProduct.coffee}
						badge={2}
						className={
							"grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1"
						}
					/>
					<ProductRender
						title={"Cold Drinks"}
						quantity={"6 items"}
						items={MenuProduct.coldDrinks}
						badge={1}
						className={
							"grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1"
						}
					/>
					<ProductRender
						title={"Bakery"}
						quantity={"5 items"}
						items={MenuProduct.bakeryItems}
						badge={1}
						className={
							"grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1"
						}
					/>
				</div>
			</div>
		</section>
	)
}

export default MenuCategory
