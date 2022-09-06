const CharacterDetail = ({
	id,
	name,
	status,
	gender,
	species,
	image,
	location,
	origin,
	created,
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 bg-violet-50/20 rounded shadow shadow-violet-500/20 overflow-hidden">
			<div className="relative">
				<p className="absolute top-2 left-3 text-xl font-bold text-violet-500">
					#{id}
				</p>
				<img
					className="object-cover w-full h-full"
					src={image}
					alt={name}
				/>
			</div>
			<div className="p-4">
				<p className="text-4xl text-white font-semibold opacity-90">
					{name}
				</p>
				<p className="text-xl text-white">
					<span className="flex items-center gap-2">
						<span className="relative flex w-5 h-5 opacity-95">
							<span
								className={`animate-ping absolute w-full h-full ${
									status === 'Alive'
										? 'bg-green-500'
										: 'bg-red-500'
								} rounded-full inline-flex opacity-75`}
							></span>
							<span
								className={`w-5 h-5 ${
									status === 'Alive'
										? 'bg-green-500'
										: 'bg-red-500'
								} rounded-full inline-flex`}
							></span>
						</span>
						<span className="opacity-80">
							{status} - {species}
						</span>
					</span>
				</p>
				<p className="opacity-50 text-white text-lg">Gender</p>
				<p className="text-xl text-white opacity-80">{gender}</p>
				<p className="opacity-50 text-white text-lg">Origin</p>
				<p className="text-xl text-white opacity-80">{origin?.name}</p>
				<p className="opacity-50 text-white text-lg">Location</p>
				<p className="text-xl text-white opacity-80">
					{location?.name}
				</p>
				<p className="opacity-50 text-white text-lg">Created</p>
				<p className="text-xl text-white opacity-80">
					{new Date(created).toLocaleDateString()}
				</p>
			</div>
		</div>
	)
}

export default CharacterDetail
