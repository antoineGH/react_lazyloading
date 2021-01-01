import './App.css'
import ImageList from './components/ImageList'

// References
// https://medium.com/javascript-in-plain-english/lazy-load-images-with-the-intersection-observer-api-and-react-4fd8ae19e195
// https://www.taraojo.com/post/lazy-loading-images
// https://codesandbox.io/s/intersectionobserverreact-zek38?from-embed=&file=/src/App.js
// https://medium.com/walmartglobaltech/lazy-loading-images-intersectionobserver-8c5bff73092
// https://www.smashingmagazine.com/2020/03/infinite-scroll-lazy-image-loading-react/

function App() {
	return (
		<div className='App'>
			<ImageList />
		</div>
	)
}

export default App
