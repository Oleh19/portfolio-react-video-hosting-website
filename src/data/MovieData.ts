import poster1 from '../assets/image/poster1.jpeg'
import poster2 from '../assets/image/poster2.jpg'
import poster3 from '../assets/image/poster3.avif'
import poster4 from '../assets/image/poster4.jpeg'
import poster5 from '../assets/image/poster5.jpeg'
import poster6 from '../assets/image/poster6.webp'
import poster7 from '../assets/image/poster1.jpeg'
import poster8 from '../assets/image/poster1.jpeg'
import poster9 from '../assets/image/poster1.jpeg'
import poster10 from '../assets/image/poster1.jpeg'
import poster11 from '../assets/image/poster1.jpeg'
import single from '../assets/image/singleImg.jpeg'
import video from '../assets/video/video.mp4'

export interface IMovie {
	name: string
	image: string
	desc: string
	titleImage: string
	category: string
	language: string
	year: number
	time: string
	video: string
	rate: number
	reviews: number
}

export const Movies: Array<IMovie> = [
	{
		name: '1 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster1,
		category: 'History',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '2 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster2,
		category: 'Drama',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '3 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster3,
		category: 'History',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '4 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster4,
		category: 'Drama',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '5 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster5,
		category: 'History',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '6 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster6,
		category: 'Drama',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '7 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster7,
		category: 'History',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '8 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster8,
		category: 'Drama',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '9 film',
		image: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		titleImage: poster9,
		category: 'History',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '10 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster10,
		category: 'Drama',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	},
	{
		name: '11 film',
		titleImage: single,
		desc: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea omnis aliquid libero quae magnam atque porro enim eveniet voluptas hic, tempore adipisci ipsa laboriosam autem mollitia nemo nihil blanditiis accusantium?',
		image: poster11,
		category: 'History',
		language: 'English',
		year: 2022,
		time: '3 hr',
		video: video,
		rate: 1.5,
		reviews: 7
	}
]
