import { FC } from 'react'
import { useParams } from 'react-router'
import { MovieCast } from '../components/singlePage/MovieCast'
import { MovieInfo } from '../components/singlePage/MovieInfo'
import { MovieRates } from '../components/singlePage/MovieRates'
import { Movies } from '../data/MovieData'
import { Layout } from '../layout/Layout'

export const SingleMovie: FC = () => {
	const { id } = useParams()
	const movie = Movies.find(movie => movie.name === id)

	return (
		<Layout>
		<MovieInfo {...movie} />
		<div className="container mx-auto min-h-screen px-2 my-6">
			<MovieCast />
			<MovieRates {...movie} />
		</div>
		</Layout>
	)
}
