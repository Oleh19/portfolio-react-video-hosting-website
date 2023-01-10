import { FC } from 'react'
import {  HiPlusCircle } from 'react-icons/hi'
import { Table2 } from '../../../components/Table2'
import { CategoriesData } from '../../../data/CategoriesData'
import { SideBar } from '../SideBar'

export const Categories: FC = () => {
	return (
		<SideBar>
			<div className='flex flex-col gap-6'>
				<div className='flex-btn gap-2'>
					<h2 className='text-xl font-bold'>Category</h2>
					<button className='bg-subMain flex flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain py-2 px-4 rounded '>
						<HiPlusCircle /> Create
					</button>
				</div>
				<Table2 data={CategoriesData} users={true} />
			</div>
		</SideBar>
	)
}
