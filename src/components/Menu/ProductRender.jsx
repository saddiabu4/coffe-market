import React from "react"

const ProductRender = ({ items, className, badge, title, quantity }) => {
	return (
		<div>
			<div className='flex flex-col gap-[40px] relative'>
				<div className='absolute inset-x-0 border-t-1 border-primary/12' />
				{/* =-=-=-=-=-=-=-=-=- Title =-=-=-=-=-=-=-=-=*/}
				<div className='flex flex-row justify-between items-end pt-[40px]'>
					<h1 className='text-primary text-3xl font-calistoga leading-[116%] max-sm:text--[24px]'>
						{title}
					</h1>
					<p className='font-cabin text-primary text-sm leading-[128%] tracking-[3%] max-sm:text-sm'>
						{quantity}
					</p>
				</div>

				{/* =-=-=-=-=-=-=-=-=- Product =-=-=-=-=-=-=-=-=*/}
				<div className={className}>
					{items.map((item, index) => (
						<div
							className=' flex flex-col justify-center items-center gap-[12px] '
							key={index}
						>
							{/* ======= Image ======= */}
							<div className='bg-primary relative rounded-3xl'>
								<img src={item.img} alt={item.title} />
								{badge === 2
									? (index === 0 || index === 1) && (
											<span className='bg-secondary text-primary rounded-4xl px-2 py-1 top-3 left-3	 absolute text-[14px] font-cabin'>
												New
											</span>
									  )
									: index === 0 && (
											<span className='bg-secondary text-primary rounded-4xl px-2 py-1 top-3 left-3	 absolute text-[14px] font-cabin'>
												New
											</span>
									  )}
							</div>

							{/* ======= Text =======*/}
							<div className='flex flex-row justify-between font-calistoga leading-[124%] tracking-[1%] w-full px-2'>
								<p className='text-primary text-xl font-bold'>{item.title}</p>
								<p className='text-xl text-primary/85'>{item.cost}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductRender
