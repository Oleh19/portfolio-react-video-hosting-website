import { FC, useState } from 'react'
import {
	BsBookmarkStarFill,
	BsCaretLeftFill,
	BsCaretRightFill
} from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Movies } from '../../data/MovieData'
import { Rating } from '../Stars'
import { Titles } from '../Titles'

export const TopRated: FC = () => {
	const [prevEl, setPrevEl] = useState<any | null>(null)
	const [nextEl, setNextEl] = useState<any | null>(null)
	const classNames =
		'hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white'

	return (
		<div className='my-16 '>
			<Titles title='Top Rated' Icon={BsBookmarkStarFill} />
			<div className='mt-10'>
				<Swiper
					navigation={{ prevEl, nextEl }}
					spaceBetween={40}
					autoplay={true}
					speed={1000}
					loop={true}
					modules={[Navigation, Autoplay]}
					breakpoints={{
						0: {
							slidesPerView: 1
						},
						400: {
							slidesPerView: 2
						},
						768: {
							slidesPerView: 3
						},
						1024: {
							slidesPerView: 4
						},
						1280: {
							slidesPerView: 5,
							spaceBetween: 30
						}
					}}
				>
					{Movies.map((movie, index) => (
						<SwiperSlide key={index}>
							<div className='p-4 h-rate hovered border border-border bg-dry  rounded-lg overflow-hidden'>
								<img
									src={movie.image}
									alt={movie.name}
									className='w-full h-full object-cover rounded-lg'
								/>
								<div className='px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
									<button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white'>
										<FaHeart />
									</button>
									<Link
										to={movie.name}
										className='font-semibold text-xl trancuted line-clamp-2'
									>
										{movie.name}
									</Link>
									<div className='flex gap-2 text-star'>
										<Rating {...movie} />
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='w-full px-1 flex-rows gap-6 pt-12'>
					<button className={classNames} ref={node => setPrevEl(node)}>
						<BsCaretLeftFill />
					</button>
					<button className={classNames} ref={node => setNextEl(node)}>
						<BsCaretRightFill />
					</button>
				</div>
			</div>
		</div>
	)
}
