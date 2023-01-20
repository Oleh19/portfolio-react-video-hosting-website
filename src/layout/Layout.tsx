import { FC } from 'react'
import { Footer } from './footer/Footer'
import { MobileFooter } from './footer/MobileFooter'
import { NavBar } from './navBar/NavBar'

interface ILayoutChildren {
	children: React.ReactNode
}

export const Layout: FC<ILayoutChildren> = ({ children }) => {
	return (
		<>
			<div className='bg-main text-white'>
				<NavBar />
				{children}
				<Footer />
				<MobileFooter />
			</div>
		</>
	)
}
