import { FC } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

interface IRatesProps {
	rate: number
}

export const Rating: FC<IRatesProps> = ({ rate }) => {
	return (
		<>
			<span>
				{rate >= 1 ? (
					<FaStar />
				) : rate >= 0.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaRegStar />
				)}
			</span>
			<span>
				{rate >= 2 ? (
					<FaStar />
				) : rate >= 1.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaRegStar />
				)}
			</span>
			<span>
				{rate >= 3 ? (
					<FaStar />
				) : rate >= 2.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaRegStar />
				)}
			</span>
			<span>
				{rate >= 4 ? (
					<FaStar />
				) : rate >= 3.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaRegStar />
				)}
			</span>
			<span>
				{rate >= 5 ? (
					<FaStar />
				) : rate >= 4.5 ? (
					<FaStarHalfAlt />
				) : (
					<FaRegStar />
				)}
			</span>
		</>
	)
}
