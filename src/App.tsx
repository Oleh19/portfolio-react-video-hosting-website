import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import { Profile } from './pages/dashboard/Profile'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { MoviesPage } from './pages/Movies'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register'
import { SingleMovie } from './pages/SingleMovie'
import { WatchPage } from './pages/WatchPage'
import Aos from 'aos'
import { Password } from './pages/dashboard/Password'
import { FavoriteMovies } from './pages/dashboard/FavoriteMovies'
import { MovieList } from './pages/dashboard/admin/MovieList'
import { Dashboard } from './pages/dashboard/admin/Dashboard'
import { Categories } from './pages/dashboard/admin/Categories'
import { Users } from './pages/dashboard/admin/Users'
import { AddMovie } from './pages/dashboard/admin/AddMovie'

export const App: FC = () => {
	Aos.init()

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
			<Route path='/profile' element={<Profile />} />
			<Route path='/password' element={<Password />} />
			<Route path='/favorites' element={<FavoriteMovies />} />
			<Route path='/movieslist' element={<MovieList />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/categories' element={<Categories />} />
			<Route path='/users' element={<Users />} />
			<Route path='/addmovie' element={<AddMovie />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
