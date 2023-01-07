import { FC } from 'react'
import { Titles } from '../Titles'
import { BsCollectionFill } from 'react-icons/bs'
import { Movies } from '../../data/MovieData'
import { Movie } from '../Movie'
export const PopularMovies: FC = () => {
	return (
		<div className='my-16'>
			<Titles title='Popular Movies' Icon={BsCollectionFill} />
			<div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gris-cols-1 gap-10'>
				{Movies.slice(0, 8).map((movie, index) => (
					<Movie key={index} {...movie} />
				))}
			</div>
		</div>
	)
}
