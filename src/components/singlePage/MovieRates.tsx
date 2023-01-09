import { FC, useState } from 'react'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { UsersData } from '../../data/UsersData'
import { Rating } from '../Stars'
import { Titles } from '../Titles'
import { Message, Select } from '../UsedInputs'
import { IMovieInfoProps } from './MovieInfo'

export const MovieRates: FC<IMovieInfoProps> = ({ name }) => {
	const Ratings = [
		{
			title: '0 - Poor',
			value: 0
		},
		{
			title: '1 - Fair',
			value: 1
		},
		{
			title: '2 - Good',
			value: 2
		},
		{
			title: '3 - Very Good',
			value: 3
		},
		{
			title: '4 - Excellent',
			value: 4
		},
		{
			title: '5 - Masterpriece',
			value: 5
		}
	]

	const [rating, setRating] = useState(0)

	return (
		<div className='my-12'>
			<Titles title='Reviews' Icon={BsBookmarkStarFill} />
			<div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded'>
				<div className='xs:col-span-2 w-full flex flex-col gap-8'>
					<h3 className='twxt-2xl font-semibold text-text'>Review "{name}"</h3>
					<p className='text-sm leading-7 font-medium text-border'>
						Write a review for this movie. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Provident maiores veniam distinctio
						recusandae temporibus, dolores placeat perferendis ullam architecto
						sequi laudantium voluptatibus rerum neque odit corrupti rem quia
						consequatur...
					</p>
					<div className='text-sm w-full'>
						<Select
							label='Select Rating'
							options={Ratings}
							onChange={(e: any) => setRating(e.target.value)}
						/>
						<div className='flex mt-4 text-lg-gap-2 text-star'>
							<Rating rate={rating} />
						</div>
					</div>
					<Message label='Message' placeholder='Make it short and sweet...' />
					<button className='bg-subMain text-white py-3 w-full flex-colo rounded '>
						Submit
					</button>
				</div>
				<div className='col-span-3 flex flex-col gap-6'>
					<h3 className='text-xl text-text font-semibold'>Reviews (70)</h3>
					<div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll'>
						{UsersData.map((user) => (
							<div className='md:grid flex flrx-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded'>
								<div className='col-span-2 bg-main hidden md:block'>
									<img
										src={user ? user.photo : 'user'}
										alt={user.fullName}
										className='w-full h-24 rounded-lg object-cover'
									/>
								</div>
								<div className='col-span-7 flex flex-col gap-2'>
									<h2>{user.fullName}</h2>
									<p className='text-xs leading-6 font-medium text-text'>
										{user?.message}
									</p>
								</div>
								<div className="col-span-3 flex flex-rows border-l border-border text-xs gap-1 text-star">
									<Rating rate={user?.rate} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
