import { Dispatch, FC, SetStateAction } from 'react'
import { Uploader } from '../Uploader'
import { Input } from '../UsedInputs'
import { MainModal } from './MainModal'
import user from '../../assets/image/user.png'

interface ICastsModalProps {
	modalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
	cast: any
}

export const CastsModal: FC<ICastsModalProps> = ({
	modalOpen,
	setModalOpen,
	cast
}) => {
	return (
		<MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
			<div className='inline-block sm:w-4/5 border border-border bg-main rounded-2xl md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full text-white'>
				<h2 className='text-3xl font-bold'>
					{cast ? 'Update Cast' : 'Create Cast'}
				</h2>
				<form className='flex flex-col gap-6 text-left mt-6'>
					<Input
						label='Cast Name'
						placeholder={cast ? cast.fullName : 'James Smit'}
						type='text'
						bg={false}
					/>
					<div className='flex flex-col gap-2'>
						<p className='`text-border font-semibold text-sm'>Cast Image</p>
						<Uploader />
						<div className='w-32 h-32 bg-main border border-border rounded '>
							<img
								src={cast ? cast.image : user}
								alt={cast?.fullName}
								className='w-full h-full object-cover rounded'
							/>
						</div>
					</div>
					<button
						onClick={() => setModalOpen(false)}
						className='w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white'
					>
						{cast ? 'Update' : 'Add'}
					</button>
				</form>
			</div>
		</MainModal>
	)
}
