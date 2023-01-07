import { FC } from 'react'
import { Banner } from '../components/home/Banner'
import { PopularMovies } from '../components/home/PopularMovies'
import { Promos } from '../components/home/Promos'
import { TopRated } from '../components/home/TopRated'
import { Layout } from '../layout/Layout'

export const Home: FC = () => {
	return (
		<Layout>
			<div className='container mx-auto min-h-screen px-2 mb-6'>
				<Banner />
				<PopularMovies />
				<Promos />
				<TopRated />
			</div>
		</Layout>
	)
}
