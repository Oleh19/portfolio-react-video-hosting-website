import { FC } from 'react'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { IconType } from 'react-icons/lib'
import { Head } from '../components/Head'

import { Layout } from '../layout/Layout'

interface IContactData {
	id: number
	title: string
	info: string
	icon: IconType
	contact: string
}

export const ContactUs: FC = () => {
	const ContactData: Array<IContactData> = [
		{
			id: 1,
			title: 'Email Us',
			info: 'You can sen your proposal here',
			icon: FiMail,
			contact: 'name@gmail.com'
		},
		{
			id: 2,
			title: 'Call Us',
			info: 'You can call us',
			icon: FiPhoneCall,
			contact: ' +380 730 449 865'
		},
		{
			id: 3,
			title: 'Location',
			info: 'Kyiv, Ukraine, Street №',
			icon: FiMapPin,
			contact: ''
		}
	]
	return (
		<Layout>
			<div className='min-height-screen container mx-auto px-2 my-6'>
				<Head title='Contact Us' />
				<div className='grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
					{ContactData.map(item => (
						<div
							key={item.id}
							className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'
						>
							<span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
								<item.icon />
							</span>
							<h5 className='text-xl font-semibold mb-2'>{item.title}</h5>
							<p className='mb-0 text-sm text-text leading-7'>
								<a href={`mailto:${item.contact}`} className='text-blue-600'>
									{item.contact}
								</a>
								<br />
								{item.info}
							</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}
