import { FC } from 'react'
import { BsCollectionFill } from 'react-icons/bs'
import { useParams } from 'react-router'
import { Movie } from '../components/Movie'
import { MovieCast } from '../components/singlePage/MovieCast'
import { MovieInfo } from '../components/singlePage/MovieInfo'
import { MovieRates } from '../components/singlePage/MovieRates'
import { Titles } from '../components/Titles'
import { Movies } from '../data/MovieData'
import { Layout } from '../layout/Layout'

export const SingleMovie: FC = () => {
	const { id } = useParams()
	const movie = Movies.find(movie => movie.name === id)
	const RelatedMovies = Movies.filter(m => m.category === movie?.category)

	return (
		<Layout>
			<MovieInfo {...movie} />
			<div className='container mx-auto min-h-screen px-2 my-6'>
				<MovieCast />
				<MovieRates {...movie} />
				<div className='my-16'>
					<Titles title='Ralated Movies' Icon={BsCollectionFill} />
					<div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
						{RelatedMovies.map((movie, index) => (
							<Movie key={index} {...movie} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}
