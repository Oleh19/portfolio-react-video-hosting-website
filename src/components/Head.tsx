import { FC } from 'react'
import titleAbout from '../assets/image/poster5.jpeg'

interface IHeadProps {
	title: string
}

export const Head: FC<IHeadProps> = ({ title }) => {
	return (
		<div className='w-full bg-deepGray lg:h-64 relative overflow-hidden rounded-md'>
			<img
				src={titleAbout}
				alt='aboutUs'
				className='w-full h-full object-cover '
			/>
			<div className='absolute top-0 w-full h-full flex-colo'>
				<h1 className='text-2xl lg:text-h1 text-white text-center font-bold '>
					{title && title}
				</h1>
			</div>
		</div>
	)
}
