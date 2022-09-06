import RickAndMortyLogo from '../assets/logos/rick-and-morty-logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="bg-cyan-500 border-b-4 border-lime-400 w-full z-20 py-2 h-24 fixed shadow">
			<div className="max-w-6xl mx-auto h-full">
				<div className="flex h-full items-center justify-between px-4">
					<Link to="/" className="h-full">
						<img
							className="h-full transform scale-125"
							src={RickAndMortyLogo}
							alt="A Rick And Morty Logo"
						/>
					</Link>
					<div className="flex gap-0 md:gap-2">
						<NavLink
							to="/form"
							className={navData =>
								`py-2 px-3 text-lg font-semibold text-lime-400 font-mono hover:underline underline-offset-2 ${
									navData.isActive ? 'underline' : ''
								}`
							}
						>
							Form
						</NavLink>
						<NavLink
							to="/users"
							className={navData =>
								`py-2 px-3 text-lg font-semibold text-lime-400 font-mono hover:underline underline-offset-2 ${
									navData.isActive ? 'underline' : ''
								}`
							}
						>
							Users
						</NavLink>
						<NavLink
							to="/cards"
							className={navData =>
								`py-2 px-3 text-lg font-semibold text-lime-400 font-mono hover:underline underline-offset-2 ${
									navData.isActive ? 'underline' : ''
								}`
							}
						>
							Cards
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
