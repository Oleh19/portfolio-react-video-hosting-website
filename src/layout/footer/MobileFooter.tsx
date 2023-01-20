import { FC } from 'react'
import { BsCollectionPlay } from 'react-icons/bs'
import { CgMenuBoxed } from 'react-icons/cg'
import { FiHeart, FiUserCheck } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

export const MobileFooter: FC = () => {
	const active = 'bg-white text-main'
	const inActive =
		'transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3 '

	const Hover: any = ({ isActive }: any) =>
		isActive ? `${active} ${inActive}` : { inActive }

	return (
		<>
			<div className='flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full'></div>
			<footer className='lg:hidden fixed z-50 bottom-0 w-full px-1'>
				<div className='bg-dry rounded-md flex-btn w-full p-1'>
					<NavLink to='/movies' className={Hover}>
						<BsCollectionPlay />
					</NavLink>
					<NavLink to='/favorites' className={Hover}>
						<div className='relative'>
							<FiHeart />
						</div>
					</NavLink>
					<NavLink to='/login' className={Hover}>
						<FiUserCheck />
					</NavLink>
					<button className={inActive}>
						<CgMenuBoxed />
					</button>
				</div>
			</footer>
		</>
	)
}
