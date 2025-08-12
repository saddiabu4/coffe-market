import React from "react"

const Button = ({ className, text, img = false, src }) => {
	return (
		<a
			className={className}
			onClick={(e) => {
				e.preventDefault()
			}}
		>
			{img ? <img src={src} alt='#' /> : text}
		</a>
	)
}

export default Button
