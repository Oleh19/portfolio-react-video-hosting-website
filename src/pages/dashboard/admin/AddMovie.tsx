import { FC, useState } from 'react'
import { Uploader } from '../../../components/Uploader'
import { Input, Message, Select } from '../../../components/UsedInputs'
import { SideBar } from '../SideBar'
import image from '../../../assets/image/poster1.jpeg'
import image2 from '../../../assets/image/poster3.avif'
import userPhoto from '../../../assets/image/user.png'
import { CategoriesData } from '../../../data/CategoriesData'
import { UsersData } from '../../../data/UsersData'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { ImUpload } from 'react-icons/im'
import { CastsModal } from '../../../components/modals/CastsModal'

export const AddMovie: FC = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [cast, setCast] = useState<any>(null)

	// useEffect(() => {
	// 	if (!modalOpen) {
	// 		setCast()
	// 	}
	// }, [modalOpen])

	return (
		<SideBar>
			<CastsModal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				cast={cast}
			/>
			<div className='flex flex-col gap-6'>
				<h2 className='text-xl font-bold'>Create Movie</h2>
				<div className='w-full grid md:grid-cols-2 gap-6'>
					<Input
						label='Movie Title'
						placeholder='Nobody'
						type='text'
						bg={true}
					/>
					<Input label='Hours' placeholder='3hr' type='text' bg={true} />
				</div>

				<div className='w-full grid md:grid-cols-2 gap-6'>
					<Input label='Language' placeholder='English' type='text' bg={true} />
					<Input
						label='Year of Release'
						placeholder='2022'
						type='number'
						bg={true}
					/>
				</div>
				<div className='w-full grid md:grid-cols-2 gap-6'>
					<div className='flex flex-col gap-2'>
						<p className='`text-border font-semibold text-sm'>
							Image Without Title
						</p>
						<Uploader />
						<div className='w-32 h-32 bg-main border border-border rounded '>
							<img
								src={image}
								alt=''
								className='w-full h-full object-cover rounded'
							/>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<p className='`text-border font-semibold text-sm'>
							Image With Title
						</p>
						<Uploader />
						<div className='w-32 h-32 bg-main border border-border rounded '>
							<img
								src={image2}
								alt=''
								className='w-full h-full object-cover rounded'
							/>
						</div>
					</div>
				</div>

				<Message
					label='Movie Description'
					placeholder='Make it short and sweet'
				/>

				<div className='text-sm w-full '>
					<Select label='Movie Category' options={CategoriesData} />
				</div>

				<div className='flex flex-col gap-2 w-full'>
					<label className='`text-border font-semibold text-sm'>
						Movie Video
					</label>
					<Uploader />
				</div>

				<div className='w-full grid lg:grid-cols-2 gap-2 items-start'>
					<button
						onClick={() => setModalOpen(true)}
						className='w-full py-4 bg-main border border-subMain border-dashed text-white rounded'
					>
						Add Cast
					</button>
					<div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
						{UsersData.map((user, index) => (
							<div
								className='p-2 italic text-xs text-text rounded flex-colo bg-main border border-border'
								key={index}
							>
								<img
									src={user.photo ? user.photo : userPhoto}
									alt={user.fullName}
									className='w-full h-24 object-cover rounded mb-2'
								/>
								<p>{user.fullName}</p>
								<div className='flex-rows mt-2 w-full gap-2'>
									<button className='w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded'>
										<MdDelete />
									</button>
									<button
										onClick={() => {
											setCast(user)
											setModalOpen(true)
										}}
										className='w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded'
									>
										<FaEdit />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>

				<button className='bg-subMain w-full flex-rows gap-6 font-medium  text-white py-4 rounded'>
					<ImUpload /> Publish Movie
				</button>
			</div>
		</SideBar>
	)
}
