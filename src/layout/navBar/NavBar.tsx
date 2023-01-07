import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo.svg'
import { FaSearch, FaHeart } from 'react-icons/fa'
import { CgUser } from 'react-icons/cg'

export const NavBar: FC = () => {
	const hover = 'hover:text-subMain transitions text-white'
	const Hover = ({ isActive }: any) => (isActive ? 'text-subMain' : hover)

	const navContent = [
		{
			name: 'Movies',
			link: '/movies'
		},
		{
			name: 'About us',
			link: '/about-us'
		},
		{
			name: 'Contact us',
			link: '/contact-us'
		},
		{
			name: 'Login',
			link: '/login',
			icon: <CgUser className='w-8 h-8' />
		},
		{
			name: 'Favorite',
			link: '/favorite',
			icon: <FaHeart className='w-6 h-6' />
		}
	]

	const navigation = navContent.map((name: any, index) => (
		<NavLink to={name.link} className={Hover} key={index}>
			{name.icon ? name.icon : name.name}
		</NavLink>
	))

	return (
		<>
			<div className='bg-main shadow-md sticky top-0 z-20'>
				<div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
					{/* Logo */}
					<div className='col-span-1 lg:block hidden'>
						<Link to='/'>
							<img src={logo} alt='logo' className='w-32 h-12 object-contain' />
						</Link>
					</div>

					{/* search Form */}
					<div className='col-span-3 '>
						<form className='w-full text-sm bg-dryGray rounded flex-btn gap-4'>
							<button
								type='submit'
								className='bg-subMain w-12 text-white flex-colo h-12 rounded '
							>
								<FaSearch />
							</button>
							<input
								type='text'
								placeholder='Search Movie'
								className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black'
							/>
						</form>
					</div>

					{/* Menu */}
					<div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
						{navigation}
					</div>
				</div>
			</div>
		</>
	)
}
