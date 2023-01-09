import photo from '../assets/image/customerPhoto.jpeg'

export interface IUserData {
	fullName: string
	photo: string
	message: string
	rate: number
	email: string
}

export const UsersData: Array<IUserData> = [
	{
		fullName: 'Oleh Ilchenko',
		photo: photo,
		message:
			'Submit Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur error optio libero. Rerum esse non, iste omnis atque ullam asperiores?',
		rate: 4.5,
		email: 'some@example.com'
	},
	{
		fullName: 'Oleh Ilchenko',
		photo: photo,
		message:
			'Submit Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur error optio libero. Rerum esse non, iste omnis atque ullam asperiores?',
		rate: 2,
		email: 'some@example.com'
	},
	{
		fullName: 'Oleh Ilchenko',
		photo: photo,
		message:
			'Submit Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur error optio libero. Rerum esse non, iste omnis atque ullam asperiores?',
		rate: 3,
		email: 'some@example.com'
	},
	{
		fullName: 'Oleh Ilchenko',
		photo: photo,
		message:
			'Submit Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur error optio libero. Rerum esse non, iste omnis atque ullam asperiores?',
		rate: 5,
		email: 'some@example.com'
	},
	{
		fullName: 'Oleh Ilchenko',
		photo: photo,
		message:
			'Submit Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur error optio libero. Rerum esse non, iste omnis atque ullam asperiores?',
		rate: 1,
		email: 'some@example.com'
	},
	{
		fullName: 'Oleh Ilchenko',
		photo: photo,
		message:
			'Submit Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur error optio libero. Rerum esse non, iste omnis atque ullam asperiores?',
		rate: 5,
		email: 'some@example.com'
	},
	{
		fullName: 'Oleh Ilchenko',
		photo: photo,
		message:
			'Submit Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur error optio libero. Rerum esse non, iste omnis atque ullam asperiores?',
		rate: 5,
		email: 'some@example.com'
	}
]
