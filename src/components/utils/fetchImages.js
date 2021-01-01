export default async function fetchImages(page = 0, limit = 10) {
	const url = 'https://picsum.photos/v2/list?'
	const urlToFetch = `${url}page=${page}&limit=${limit}`

	const response = await fetch(urlToFetch)

	let responseJson = undefined
	let errorJson = undefined

	response.ok ? (responseJson = await response.json()) : (errorJson = await response.json())

	return new Promise((resolve, reject) => {
		responseJson ? resolve(responseJson) : reject(errorJson)
	})
}
