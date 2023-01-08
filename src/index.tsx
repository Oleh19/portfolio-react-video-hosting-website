import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<HashRouter basename={process.env.PUBLIC_URL}>
			{/* <BrowserRouter> */}
			<App />
			{/* </BrowserRouter> */}
		</HashRouter>
	</React.StrictMode>
)
