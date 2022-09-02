import { useEffect, useState } from 'react'
import CharactersList from '../components/CharactersList'

const Cards = () => {
	const [characters, setCharacters] = useState([])
	const [page, setPage] = useState(1)

	const URL = 'https://rickandmortyapi.com/api/character'

	const getCharacters = async page => {
		try {
			const response = await fetch(`${URL}?page=${page}`)

			const data = await response.json()

			setCharacters(data.results)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getCharacters(page)
	}, [page])

	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1)
		}
	}

	const handleNextPage = () => {
		if (page < 42) {
			setPage(page + 1)
		}
	}

	return (
		<main className="min-h-screen bg-cyan-700 pt-32 md:pt-52">
			<div className="max-w-6xl mx-auto h-full">
				<div className="flex flex-col justify-center items-center w-full gap-2 h-full">
					<h1 className="text-lime-400/80 text-2xl md:text-5xl font-bold">
						Cards
					</h1>
					<div className="grid grid-cols-3 gap-2">
						<button
							onClick={handlePreviousPage}
							disabled={page <= 1}
							className="text-cyan-700 bg-white/80 hover:bg-white/90 active:bg-lime-500 rounded transition shadow disabled:invisible"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="currentColor"
							>
								<path fill="none" d="M0 0h24v24H0z" />
								<path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
							</svg>
						</button>
						<p className="text-white/80 font-bold text-center">
							{page}
						</p>
						<button
							onClick={handleNextPage}
							disabled={page >= 42}
							className="text-cyan-700 bg-white/80 hover:bg-white/90 active:bg-lime-500 rounded transition shadow disabled:invisible"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="currentColor"
							>
								<path fill="none" d="M0 0h24v24H0z" />
								<path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" />
							</svg>
						</button>
					</div>
					<CharactersList characters={characters} />
				</div>
			</div>
		</main>
	)
}

export default Cards
