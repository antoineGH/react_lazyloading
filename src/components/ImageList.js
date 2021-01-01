import React, { useState, useEffect } from 'react'
import Image from './Image'
import fetchImages from './utils/fetchImages'

export default function ImageList() {
	const [hasError, setHasError] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	const [imageList, setImageList] = useState([])

	useEffect(() => {
		fetchImages()
			.then((response) => {
				setImageList(response)
				setIsLoaded(true)
			})
			.catch((error) => {
				setHasError(true)
				setIsLoaded(true)
				console.log(error)
			})
	}, [])

	if (hasError) {
		return <p>hasError</p>
	}
	if (!isLoaded) {
		return <p>Loading</p>
	}
	if (imageList) {
		return (
			<>
				{imageList.map((image) => {
					return (
						<div key={image.id}>
							<Image url={image.download_url} author={image.author} />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</div>
					)
				})}
			</>
		)
	}
}
