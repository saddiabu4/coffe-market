import React from "react"

const Button = ({ className, text }) => {
	return (
		<a
			className={className}
			onClick={(e) => {
				e.preventDefault()
			}}
		>
			{text}
		</a>
	)
}

export default Button
