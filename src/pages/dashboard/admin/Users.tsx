import { FC } from 'react'
import { Table2 } from '../../../components/Table2'
import { UsersData } from '../../../data/UsersData'
import { SideBar } from '../SideBar'

export const Users: FC = () => {
	return (
		<SideBar>
			<div className='flex flex-col gap-6'>
				<h2 className='text-xl font-bold'>Category</h2>

				<Table2 data={UsersData} users={true} />
			</div>
		</SideBar>
	)
}
