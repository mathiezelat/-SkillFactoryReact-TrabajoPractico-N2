import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CharacterDetail from '../components/CharacterDetail'

const Character = () => {
	const [character, setCharacter] = useState()

	const URL = 'https://rickandmortyapi.com/api/character'

	const { id } = useParams()

	const getCharacter = async () => {
		try {
			const response = await fetch(`${URL}/${id}`)

			const data = await response.json()

			setCharacter(data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getCharacter()
	}, [])

	console.log(character)

	return (
		<main className="min-h-screen bg-cyan-700 pt-32 md:pt-52">
			<div className="max-w-6xl mx-auto h-full">
				<div className="flex flex-col w-full h-full px-2">
					<CharacterDetail
						id={character?.id}
						name={character?.name}
						status={character?.status}
						gender={character?.gender}
						species={character?.species}
						image={character?.image}
						location={character?.location}
						origin={character?.origin}
						created={character?.created}
					/>
				</div>
			</div>
		</main>
	)
}

export default Character
