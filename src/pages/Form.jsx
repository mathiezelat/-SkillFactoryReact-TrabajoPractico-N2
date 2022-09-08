import { useState } from 'react'
const Form = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [coment, setComent] = useState('')
	const [data, setData] = useState({})

	const resetForm = () => {
		setName('')
		setEmail('')
		setComent('')
	}

	const handleSubmit = event => {
		event.preventDefault()

		const newContact = {
			name,
			email,
			coment,
		}

		resetForm()

		console.log('Contacto', newContact)

		setData(newContact)
	}

	return (
		<main className="min-h-screen bg-cyan-700 pt-32 md:pt-52">
			<div className="max-w-6xl mx-auto h-full">
				<div className="flex flex-col justify-center items-center w-full gap-2 h-full">
					<h1 className="text-lime-400/80 text-2xl md:text-5xl font-bold">
						Formulario de contacto
					</h1>
					<form
						onSubmit={handleSubmit}
						className="grid grid-cols-1 gap-4 w-full px-5 md:px-0 md:w-1/2 mt-4"
					>
						<div className="grid">
							<label htmlFor="name" className="text-white/90">
								Nombre
							</label>
							<input
								type="text"
								name="name"
								id="name"
								required
								className="text-white/80 bg-cyan-600 mt-1 block w-full border border-cyan-800 rounded-md pt-1 pb-2 px-2 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition"
								value={name}
								onChange={event => setName(event.target.value)}
							/>
						</div>
						<div className="grid">
							<label htmlFor="email" className="text-white/90">
								Correo electrónico
							</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								className="text-white/80 bg-cyan-600 mt-1 block w-full border border-cyan-800 rounded-md pt-1 pb-2 px-2 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition"
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</div>
						<div className="grid">
							<label htmlFor="coment" className="text-white/90">
								Comentario
							</label>
							<textarea
								type="text"
								name="coment"
								id="coment"
								rows={3}
								required
								className="text-white/80 bg-cyan-600 mt-1 block w-full border border-cyan-800 rounded-md pt-1 pb-2 px-2 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition resize-none"
								value={coment}
								onChange={event =>
									setComent(event.target.value)
								}
							/>
						</div>
						<input
							type="submit"
							value="ENVIAR"
							className="flex justify-center bg-white/80 hover:bg-white/90 rounded py-2 px-6 font-semibold text-lg text-cyan-700 shadow transition hover:ring-offset-4 hover:ring-2 ring-white/90 ring-offset-cyan-700 cursor-pointer"
						/>
					</form>
					<div className="w-full md:w-1/2 px-5 md:px-0">
						<div className="my-5 bg-black font-mono text-green-500 p-2 rounded">
							<p className="text-sm md:text-base">
								{data.name ? (
									<span>
										Nombre:{' '}
										<span className="italic">
											{data.name}
										</span>
									</span>
								) : (
									'Esperando nombre del formulario...'
								)}
							</p>
							<p className="text-sm md:text-base">
								{data.email ? (
									<span>
										Correo electrónico:{' '}
										<span className="italic">
											{data.email}
										</span>
									</span>
								) : (
									'Esperando correo electrónico del formulario...'
								)}
							</p>
							<p className="text-sm md:text-base">
								{data.coment ? (
									<span>
										Comentario:{' '}
										<span className="italic">
											{data.coment}
										</span>
									</span>
								) : (
									'Esperando comentario del formulario...'
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Form
