import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import { Home } from './pages/Home'
import { MoviesPage } from './pages/Movies'
import { NotFound } from './pages/NotFound'
import { SingleMovie } from './pages/SingleMovie'

export const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about-us' element={<AboutUs />} />
			<Route path='/contact-us' element={<ContactUs />} />
			<Route path='/movies' element={<MoviesPage />} />
			<Route path='/movie/:id' element={<SingleMovie />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
