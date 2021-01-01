import React, { useEffect, useRef } from 'react'
import grey from './../assets/grey.jpeg'

export default function Image(props) {
	const { url, author } = props
	const thisImage = useRef()

	useEffect(() => {
		let observer = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log('intersect')
						thisImage.current.src = url
						observer = observer.disconnect()
					}
				}),
			{ rootMargin: '0px 0px 200px 0px' }
		)
		observer.observe(thisImage.current)
	}, [url])

	return (
		<>
			<img ref={thisImage} alt={author} src={grey} style={{ width: '500px' }} />
		</>
	)
}
