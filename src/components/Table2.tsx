import { FC } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { ICategoriesData } from '../data/CategoriesData'
import { IUserData } from '../data/UsersData'
import user from '../assets/image/user.png'

interface ITable2Props {
	data: IUserData[] | ICategoriesData[]
	users: boolean
	OnEditFunction?: any
}

const Head = 'text-xs text-left text-main font-semibold px-6 py-2 uppercase'
const Text = 'text-sm text-left leading-6 whitespace-nowrap px-5 py-3'

// Rows
const Rows = (
	data: ICategoriesData,
	index: number,
	users: boolean,
	OnEditFunction: any
) => {
	return (
		<tr key={index}>
			{users ? (
				<>
					<td className={`${Text}`}>
						<div className='w-12 p-1 bg-dry border borderborder h-12 rounded overflow-hidden'>
							<img
								src={data.image || user}
								alt={data?.title}
								className='h-16 w-full  object-cover'
							/>
						</div>
					</td>
					<td className={`${Text}`}>{data.id ? data.id : '19OI435G'}</td>
					<td className={`${Text}`}>
						{data.createAt ? data.createAt : '10, June, 2023'}
					</td>
					<td className={`${Text}`}>{data.FullName}</td>
					<td className={`${Text}`}>{data.email}</td>
					<td className={`${Text} float-right flex-rows gap-2`}>
						<button className=' bg-subMain text-white rounded flex-colo w-6 h-6 '>
							<MdDelete />
						</button>
					</td>
				</>
			) : (
				<>
					<td className={`${Text} font-bold`}>19OI435G</td>
					<td className={`${Text}`}>
						{data.createAt ? data.createAt : '10, June, 2023'}
					</td>
					<td className={`${Text}`}>{data.title}</td>
					<td className={`${Text} float-right flex-rows gap-2`}>
						<button
							onClick={() => OnEditFunction(data)}
							className=' border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'
						>
							Edit <FaEdit className='text-green-500' />
						</button>
						<button className=' bg-subMain text-white rounded flex-colo w-6 h-6 '>
							<MdDelete />
						</button>
					</td>
				</>
			)}
		</tr>
	)
}

//Table
export const Table2: FC<ITable2Props> = ({ data, users, OnEditFunction }) => {
	return (
		<div className='overflow-x-scroll overflow-hidden relative w-full'>
			<table className='w-full table-auto border border-border divide-y divide-border'>
				<thead className='bg-dryGray'>
					{users ? (
						<>
							<th scope='col' className={`${Head}`}>
								Image
							</th>
							<th scope='col' className={`${Head}`}>
								Id
							</th>
							<th scope='col' className={`${Head}`}>
								Date
							</th>
							<th scope='col' className={`${Head}`}>
								Full Name
							</th>
							<th scope='col' className={`${Head}`}>
								Email
							</th>
						</>
					) : (
						<>
							<th scope='col' className={`${Head}`}>
								Id
							</th>
							<th scope='col' className={`${Head}`}>
								Date
							</th>
							<th scope='col' className={`${Head}`}>
								title
							</th>
						</>
					)}

					<th scope='col' className={`${Head} text-end`}>
						Actions
					</th>
				</thead>
				<tbody className='bg-main divide-y divide-gray-800'>
					{data.map((data: any, index) =>
						Rows(data, index, users, OnEditFunction)
					)}
				</tbody>
			</table>
		</div>
	)
}
