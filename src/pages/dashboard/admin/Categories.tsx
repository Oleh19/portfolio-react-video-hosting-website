import { FC, useState } from 'react'
import { HiPlusCircle } from 'react-icons/hi'
import { CategoryModal } from '../../../components/modals/CategoryModal'
import { Table2 } from '../../../components/Table2'
import { CategoriesData } from '../../../data/CategoriesData'
import { SideBar } from '../SideBar'

export const Categories: FC = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [category, setCategory] = useState()

	const OnEditFunction = (id: any) => {
		setCategory(id)
		setModalOpen(!modalOpen)
	}

	return (
		<SideBar>
			<CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} category={category} />
			<div className='flex flex-col gap-6'>
				<div className='flex-btn gap-2'>
					<h2 className='text-xl font-bold'>Category</h2>
					<button
						onClick={() => setModalOpen(true)}
						className='bg-subMain flex flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain py-2 px-4 rounded '
					>
						<HiPlusCircle /> Create
					</button>
				</div>
				<Table2 data={CategoriesData} users={false} OnEditFunction={OnEditFunction} />
			</div>
		</SideBar>
	)
}
