import { useState, useEffect } from 'react'
import TableUsers from '../components/TableUsers'

const Users = () => {
	const [users, setUsers] = useState([])

	const URL = 'https://jsonplaceholder.typicode.com/users'

	const getUsers = async () => {
		try {
			const response = await fetch(URL)

			const data = await response.json()

			setUsers(data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<main className="min-h-screen bg-cyan-700 pt-32 md:pt-52">
			<div className="max-w-6xl mx-auto h-full">
				<div className="flex flex-col justify-center items-center w-full gap-2 h-full px-4">
					<h1 className="text-lime-400/80 text-2xl md:text-5xl font-bold">
						Users
					</h1>
					<TableUsers users={users} />
				</div>
			</div>
		</main>
	)
}

export default Users
