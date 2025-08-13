import { useState } from "react"
import { Link } from "react-scroll"
import { categoryLink, MenuProduct } from "../../constants"
import ProductRender from "../ProductRender"

const MenuCategory = () => {
	const [activeCategory, setActiveCategory] = useState(MenuProduct.coffee)

	const handleCategoryClick = (categoryID) => {
		setActiveCategory(categoryID)
		document.getElementById(`${categoryID}`).scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	}

	return (
		<section className='py-[120px] px-[40px] max-sm:py-[104px] max-sm:px-[24px] bg-secondary/50'>
			<div className='flex gap-6 max-md:flex-col max-md:gap-[64px]'>
				{/* =-=-=-=-=-=-=-=-=- Left Section =-=-=-=-=-=-=-=-= */}
				<div>
					<div className='flex flex-col gap-5 sticky top-16 max-md:flex-row max-sm:overflow-x-scroll'>
						{categoryLink.map(({ name, link, img, index }) => (
							<Link
								key={index}
								to={`${link}`}
								className='transition-all duration-300 cursor-pointer hover:text-white'
								smooth
								offset={0}
								duration={1000}
							>
								<div
									className={`flex flex-row items-center gap-5 w-[282px] h-auto cursor-pointer	${
										activeCategory === link
											? "opacity-100"
											: "opacity-50 hover:opacity-75"
									}`}
									onClick={() => handleCategoryClick(link)}
								>
									<div className='bg-primary rounded-4xl w-[56px] h-auto'>
										<img src={img} alt={name} className='rounded-4xl' />
									</div>
									<p className='font-calistoga text-xl text-primary'>{name}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
				{/* =-=-=-=-=-=-=-=-=- Right Section =-=-=-=-=-=-=-=-=*/}
				<div className='flex flex-col gap-[64px]'>
					<ProductRender
						id={"coffee"}
						title={"Coffee"}
						quantity={"9 items"}
						items={MenuProduct.coffee}
						badge={2}
						className={
							"grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1"
						}
					/>
					<ProductRender
						id={"coldDrinks"}
						title={"Cold Drinks"}
						quantity={"6 items"}
						items={MenuProduct.coldDrinks}
						badge={1}
						className={
							"grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1"
						}
					/>
					<ProductRender
						id={"bakeryItems"}
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

{
	/* <div className='flex flex-row items-center gap-5 w-[282px] h-auto cursor-pointer'>
									<div className='bg-primary rounded-4xl w-[56px] h-auto'>
										<img src={img} alt={name} className='rounded-4xl' />
									</div>
									<p className='font-calistoga text-xl text-primary'>{name}</p>
								</div> */
}
