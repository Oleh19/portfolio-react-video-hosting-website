import { FC } from 'react'
import { FaRegListAlt, FaUsers } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'
import { Table } from '../../../components/Table'
import { Movies } from '../../../data/MovieData'
import { SideBar } from '../SideBar'

interface IDashboard {
	bg: string
	icon: IconType
	title: string
	total: number
}

export const Dashboard: FC = () => {
	const DashboardData: Array<IDashboard> = [
		{
			bg: 'bg-orange-600',
			icon: FaRegListAlt,
			title: 'Total Movies',
			total: 90
		},
		{
			bg: 'bg-blue-700',
			icon: HiViewGridAdd,
			title: 'Total Categories',
			total: 8
		},
		{
			bg: 'bg-green-600',
			icon: FaUsers,
			title: 'Total Users',
			total: 190
		}
	]

	return (
		<SideBar>
			<h2 className='text-xl font-bold'>Dashboard</h2>
			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
				{DashboardData.map((data, index) => (
					<div
						className='p-4 rounded bg-main border-collapse grid grid-cols-4 gap-2'
						key={index}
					>
						<div
							className={`col-span-1 rounded-full  h-12 w-12 flex-colo ${data.bg}`}
						>
							<data.icon />
						</div>
						<div className='col-span-3'>
							<h2>{data.title}</h2>
							<p className='text-text mt-2 font-bold'>{data.total}</p>
						</div>
					</div>
				))}
			</div>
			<h3 className='text-md font-medium text-border my-6'>recent Movies</h3>
			<Table data={Movies.slice(0, 5)} admin={true} />
		</SideBar>
	)
}
