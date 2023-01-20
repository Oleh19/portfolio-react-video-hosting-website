import { Dispatch, FC, SetStateAction } from 'react'
import { Input } from '../UsedInputs'
import { MainModal } from './MainModal'

interface ICategoryModalProps {
	modalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
	category: any
}

export const CategoryModal: FC<ICategoryModalProps> = ({
	modalOpen,
	setModalOpen,
	category
}) => {
	return (
		<MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
			<div className='inline-block sm:w-4/5 border border-border bg-main rounded-2xl md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full text-white'>
				<h2 className='text-3xl font-bold'>{category ? 'Update' : 'Create'}</h2>
				<form className='flex flex-col gap-6 text-left mt-6'>
					<Input
						label='Category Name'
						placeholder={category ? category.title : 'Actions'}
						type='text'
						bg={false}
					/>
					<button
						onClick={() => setModalOpen(false)}
						className='w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white'
					>
						{category ? 'Update' : 'Add'}
					</button>
				</form>
			</div>
		</MainModal>
	)
}
