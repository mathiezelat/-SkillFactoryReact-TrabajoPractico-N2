import RocketEmoji from '../assets/emojis/rocket_3d.png'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<main className="h-screen bg-cyan-700">
			<div className="max-w-6xl mx-auto h-full">
				<div className="flex flex-col justify-center items-center w-full gap-2 h-full">
					<div className="flex justify-center items-center gap-2">
						<img
							className="w-5 h-5 md:w-10 md:h-10 animate-wiggle"
							src={RocketEmoji}
							alt="A Rocket Emoji"
						/>
						<h1 className="text-lime-400/80 text-2xl md:text-5xl font-bold">
							Skill Factory React
						</h1>
					</div>
					<p className="text-white/80 text-xl font-semibold">
						Trabajo Práctico 2
					</p>
					<div className="grid grid-cols-3 gap-4 mt-10">
						<Link
							to="/form"
							className="flex justify-center bg-white/80 hover:bg-white/90 rounded py-2 px-6 font-semibold text-lg text-cyan-700 shadow transition hover:ring-offset-4 hover:ring-2 ring-white/90 ring-offset-cyan-700"
						>
							FORM
						</Link>
						<Link
							to="/users"
							className="flex justify-center bg-white/80 hover:bg-white/90 rounded py-2 px-6 font-semibold text-lg text-cyan-700 shadow transition hover:ring-offset-4 hover:ring-2 ring-white/90 ring-offset-cyan-700"
						>
							USERS
						</Link>
						<Link
							to="/cards"
							className="flex justify-center bg-white/80 hover:bg-white/90 rounded py-2 px-6 font-semibold text-lg text-cyan-700 shadow transition hover:ring-offset-4 hover:ring-2 ring-white/90 ring-offset-cyan-700"
						>
							CARDS
						</Link>
					</div>
					<div className="text-white/80 mt-10">
						<p>By Mathías Ezequiel Latrónico</p>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
