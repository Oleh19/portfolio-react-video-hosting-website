import { FC } from 'react'
import { FaCloudDownloadAlt, FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IMovie } from '../data/MovieData'
import { GoEye } from 'react-icons/go'

interface ITableProps {
	data: IMovie[]
	admin: boolean
}

const Head = 'text-xs text-left text-main font-semibold px-6 py-2 uppercase'
const Text = 'text-sm text-left leading-6 whitespace-nowrap px-5 py-3'

// Rows
const Rows = (movie: IMovie, index: number, admin: boolean) => {
	return (
		<tr key={index}>
			<td className={`${Text}`}>
				<div className='w-12 p-1 bg-dry border borderborder h-12 rounded overflow-hidden'>
					<img
						src={movie.titleImage}
						alt={movie?.name}
						className='h-16 w-full  object-cover'
					/>
				</div>
			</td>
			<td className={`${Text} truncate`}>{movie.name}</td>
			<td className={`${Text}`}>{movie.category}</td>
			<td className={`${Text}`}>{movie.language}</td>
			<td className={`${Text}`}>{movie.year}</td>
			<td className={`${Text}`}>{movie.time}</td>
			<td className={`${Text} float-right flex-rows gap-2`}>
				{admin ? (
					<>
						<button className=' border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
							Edit <FaEdit className='text-green-500' />
						</button>
						<button className=' bg-subMain text-white rounded flex-colo w-6 h-6 '>
							<MdDelete />
						</button>
					</>
				) : (
					<>
						<button className=' border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
							Download <FaCloudDownloadAlt className='text-green-500' />
						</button>
						<Link
							to={`/movie/${movie?.name}`}
							className=' bg-subMain text-white rounded flex-colo w-6 h-6 '
						>
							<GoEye />
						</Link>
					</>
				)}
			</td>
		</tr>
	)
}

//Table
export const Table: FC<ITableProps> = ({ data, admin }) => {
	return (
		<div className='overflow-x-scroll overflow-hidden relative w-full'>
			<table className='w-full table-auto border border-border divide-y divide-border'>
				<thead className='bg-dryGray'>
					<th scope='col' className={`${Head}`}>
						Image
					</th>
					<th scope='col' className={`${Head}`}>
						Name
					</th>
					<th scope='col' className={`${Head}`}>
						Category
					</th>
					<th scope='col' className={`${Head}`}>
						Language
					</th>
					<th scope='col' className={`${Head}`}>
						Year
					</th>
					<th scope='col' className={`${Head}`}>
						Hours
					</th>
					<th scope='col' className={`${Head} text-end`}>
						Actions
					</th>
				</thead>
				<tbody className='bg-main divide-y divide-gray-800'>
					{data.map((movie, index) => Rows(movie, index, admin))}
				</tbody>
			</table>
		</div>
	)
}
