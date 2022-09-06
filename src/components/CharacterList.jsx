import CharacterCard from './CharacterCard'

const CharactersList = ({ characters }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 px-4">
			{characters.map(character => (
				<CharacterCard key={character.id} character={character} />
			))}
		</div>
	)
}

export default CharactersList
