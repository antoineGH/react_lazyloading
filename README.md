# Lazy Loading Images with IntersectionObserver React

# Table of contents

1. [Project description](#description)
2. [Installation instructions](#installation)
3. [Project structure](#structure)
4. [Explainations](#explainations)
5. [Screenshots](#screenshots)

## 1. Project description<a name="description"></a>

For most websites nowadays, images are the primary bottlenecks to site performance.

This project aims to reduce page loading time on first render by loading images only if they are to be displayed in the user viewport.

Here are the basic steps to making this image component lazy loaded:

1. Initially render no image source.
2. Set up detection for when image intersects with viewport.
3. Render image source when we detect that image will be in view.

## 2. Installation instructions<a name="installation"></a>

Versions:

-   Node: 14.15.1
-   Npm: 6.14.8
-   React: 17.0.1

Download code from Github:

```shell
git clone https://github.com/antoineratat/react_lazyloading.git
```

Navigate to project directory.

```shell
cd react_intersection_observer
```

Install node modules.

```shell
npm install
```

Run the app in development mode. Open http://localhost:3000 to view it in the browser.

```shell
npm start
```

## 3. Project structure<a name="structure"></a>

-   src
    -   App.js
    -   components
        -   assets
            -   grey.jpeg
        -   ImageList.js
        -   Image.js
    -   utils
        -   fetchImages.js

## 4. Explainations<a name="explainations"></a>

Step 1 — Initially render grey image (loading image)

```shell
<img alt={author} src={grey} />
```

Step 2 - Set up Ref

```shell
import React, { useRef } from 'react'
const thisImage = useRef()
<img ref={thisImage} alt={author} src={grey} />
```

Step 3 — Set up detection

```shell
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
```

## 5. Screenshots<a name="screenshots"></a>

![Pagination Screenshot](https://github.com/antoineratat/react_lazyloading/blob/main/screenshots/1.PNG?raw=true)
