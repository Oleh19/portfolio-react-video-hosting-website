import { FC } from 'react'
import { FiUser } from 'react-icons/fi'
// import mobile1 from '../../assets/image/mobile1.png'

export const Promos: FC = () => {
	return (
		<div className='my-20 py-10 md:px-20 px-8 bg-dry'>
			<div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
				<div className='flex lg:gap-10 gap-6 flex-col'>
					<h1 className='xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed'>
						Download your Movies & Watch offline <br /> Enjoy on Your Mobile
					</h1>
					<p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem magnam repudiandae praesentium voluptas quibusdam rem
						neque et enim laboriosam excepturi, reprehenderit distinctio
						similique hic ipsam aut eos sequi tempore ab...
					</p>
					<div className='flex gap-4 md:text-lg text-sm'>
						<div className='flex-colo bg-black text-subMain px-6 py-3 rounded-md font-bold'>
							HD 4K
						</div>
						<div className='flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded-md font-bold'>
							<FiUser /> 2K
						</div>
					</div>
				</div>
				{/* <div>
					<img
						src={mobile1}
						alt='Mobile app'
						className='object-contain  height-mobile' 
					/>
				</div> */}
			</div>
		</div>
	)
}