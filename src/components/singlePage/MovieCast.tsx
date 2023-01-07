import { FC } from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { UsersData } from '../../data/UsersData'
import { Titles } from '../Titles'

export const MovieCast: FC = () => {
	return (
		<div className='my-12'>
			<Titles title='Casts' Icon={FaUserFriends} />
			<div className='mt-10'>
				<Swiper
					autoplay={{
						delay: 1000,
						disableOnInteraction: false
					}}
					loop={true}
					speed={1000}
					modules={[Autoplay]}
					spaceBetween={10}
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
					{UsersData.map((user, index) => (
						<SwiperSlide key={index}>
							<div className='w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800'>
								<img
									src={user.photo}
									alt={user.fullName}
									className='w-full h-64 object-cover rounded mb-4'
								/>
								<p>{user.fullName}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
