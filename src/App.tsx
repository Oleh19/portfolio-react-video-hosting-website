import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { MoviesPage } from './pages/Movies'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register'
import { SingleMovie } from './pages/SingleMovie'
import { WatchPage } from './pages/WatchPage'

export const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about-us' element={<AboutUs />} />
			<Route path='/contact-us' element={<ContactUs />} />
			<Route path='/movies' element={<MoviesPage />} />
			<Route path='/movie/:id' element={<SingleMovie />} />
			<Route path='/watch/:id' element={<WatchPage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
