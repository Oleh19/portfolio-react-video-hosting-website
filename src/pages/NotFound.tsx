import { FC } from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import pageNotFound from '../assets/image/page not found.webp'

export const NotFound: FC = () => {
	return (
		<div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
			<img
				src={pageNotFound}
				alt='not found'
				className='w-full h-96 object-contain'
			/>
			<h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
			<p className='font-medium text-border italic leading-6'>
				The page are you looking doesn't exist
			</p>
			<Link
				to='/'
				className='bg-subMain transitions text-white flex-rows gap-4 font-medium py-3 hover:text-main px-6 rounded-md'
			>
				<BiHomeAlt />Back Home
			</Link>
		</div>
	)
}
