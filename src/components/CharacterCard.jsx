const CharacterCard = ({ character }) => {
	return (
		<div
			key={character.id}
			className="rounded bg-violet-50/20 overflow-hidden shadow shadow-violet-500/20"
		>
			<div className="flex gap-4">
				<div className="basis-1/2 grow relative">
					<p className="absolute top-2 left-3 text-lg font-bold text-violet-500">
						#{character.id}
					</p>
					<img
						className="object-cover w-full h-full"
						src={character.image}
						alt={character.name}
					/>
				</div>
				<div className="basis-1/2 shrink-0 grow-0 flex flex-col py-2">
					<p className="text-2xl font-semibold">{character.name}</p>
					<p>
						<span className="flex items-center gap-2">
							<span className="relative flex w-3 h-3">
								<span
									className={`animate-ping absolute w-full h-full ${
										character.status === 'Alive'
											? 'bg-green-500'
											: 'bg-red-500'
									} rounded-full inline-flex opacity-75`}
								></span>
								<span
									className={`w-3 h-3 ${
										character.status === 'Alive'
											? 'bg-green-500'
											: 'bg-red-500'
									} rounded-full inline-flex`}
								></span>
							</span>
							{character.status} - {character.species}
						</span>
					</p>
					<p className="text-gray-800 text-sm">Gender</p>
					<p className="text-lg">{character.gender}</p>
					<p className="text-gray-800 text-sm">Origin</p>
					<p className="text-lg">{character.origin.name}</p>
				</div>
			</div>
		</div>
	)
}

export default CharacterCard
