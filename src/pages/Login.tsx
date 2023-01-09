import { FC } from 'react'
import { Layout } from '../layout/Layout'
import logo from '../assets/image/logo.svg'
import { Input } from '../components/UsedInputs'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

export const Login: FC = () => {
	return (
		<Layout>
			<div className='container mx-auto px-2 my-24 flex-colo'>
				<div className='w-full md:w-3/5 gap-8 flex-colo sm:p-14 p-8 2xl:w-2/5 bg-dry rounded-lg border border-border'>
					<img src={logo} alt='logo' className='w-full h-12 object-contain' />
					<Input
						label='Email'
						placeholder='Enter your email'
						type='email'
						bg={true}
					/>
					<Input
						label='Password'
						placeholder='Enter your password'
						type='empassword'
						bg={true}
					/>
					<Link
						to='/dashboard'
						className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'
					>
						<FiLogIn /> Sign In
					</Link>
					<p className='text-center text-border'>
						Don't have an account ? {''}
						<Link to='/register' className='text-dryGray font-semibold ml:-2'>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</Layout>
	)
}
