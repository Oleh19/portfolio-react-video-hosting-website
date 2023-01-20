import { Dispatch, FC, SetStateAction } from 'react'
import { FaPlay, FaShareAlt } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FlexMovieItems } from '../FlexMovieItems'

export interface IMovieProps {
	name?: string
	image?: string
	desc?: string
	titleImage?: string
	category?: string
	language?: string
	year?: number
	time?: string
	video?: string
	rate?: number
	reviews?: number
}

interface IMovieInfoProps {
	movie?: IMovieProps
	setModalOpen: Dispatch<SetStateAction<boolean>>
	modalOpen: boolean
}

export const MovieInfo: FC<IMovieInfoProps> = ({
	movie,
	setModalOpen,
	modalOpen
}) => {
	return (
		<div className='w-full xl:h-screen relative text-white'>
			<img
				src={movie?.image}
				alt={movie?.name}
				className='hidden w-full h-full xl:inline-block  object-cover'
			/>
			<div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
				<div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8'>
					<div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden'>
						<img
							src={movie?.titleImage}
							alt={movie?.name}
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
						<div className='col-span-3 flex flex-col gap-10'>
							<h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
								{movie?.name}
							</h1>
							<div className='flex items-center gap-4 font-medium text-dryGray'>
								<div className='flex-colo bg-subMain text-xs px-2 py-1'>
									HD 4K
								</div>
								<FlexMovieItems {...movie} />
							</div>
							<p className='text-text text-sm leading-7'>{movie?.desc}</p>
							<div className='grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg'>
								<div className='col-span-1 flex-colo border-r border-border'>
									<button onClick={() => setModalOpen(true)} className='w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20'>
										<FaShareAlt />
									</button>
								</div>
								<div className='col-span-2 flex-colo font-medium text-sm'>
									<p>
										Language : {''}{' '}
										<span className='ml-2 truncate'>{movie?.language}</span>{' '}
									</p>
								</div>

								<div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
									<Link
										to={`/watch/${movie?.name}`}
										className='bg-dry py-4 hover:bg-subMain transition border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3'
									>
										<FaPlay className='w-3 h-3' /> Watch
									</Link>
								</div>
							</div>
						</div>
						<div className='col-span-2 md:mt-0 mt-2 flex justify-end'>
							<button className='md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border-2 border-subMain transitions h-64 rounded font-medium'>
								<div className='flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
									Download <FiLogIn className='w-6 h-6' />
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
