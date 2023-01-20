import { FC } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'
import { IMovieProps } from './singlePage/MovieInfo'

export const FlexMovieItems: FC<IMovieProps> = ({
	category,
	year,
	time
}) => {
	return (
		<>
			<div className='flex item-center gap-2'>
				<span className='text-sm font-medium'>{category}</span>
			</div>
			<div className='flex item-center gap-2'>
				<FaRegCalendarAlt className='text-subMain w-3 h-3' />
				<span className='text-sm font-medium'>{year}</span>
			</div>
			<div className='flex item-center gap-2'>
				<BiTime className='text-subMain w-3 h-3' />
				<span className='text-sm font-medium'>{time}</span>
			</div>
		</>
	)
}
