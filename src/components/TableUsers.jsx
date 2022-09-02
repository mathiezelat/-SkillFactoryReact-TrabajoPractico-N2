const TableUsers = ({ users }) => {
	return (
		<div className="grid w-full overflow-x-auto">
			<table className="table-fixed shadow rounded overflow-hidden">
				<thead className="bg-lime-400/80">
					<tr>
						<th className="text-center p-2 font-semibold">Id</th>
						<th className="text-left p-2 font-semibold">Name</th>
						<th className="text-left p-2 font-semibold">Email</th>
						<th className="text-left p-2 font-semibold">Phone</th>
						<th className="text-left p-2 font-semibold">City</th>
						<th className="text-left p-2 font-semibold">Company</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr
							key={user.id}
							className="odd:bg-white/40 even:bg-white/20"
						>
							<td className=" font-semibold p-2 text-center">
								{user.id}
							</td>
							<td className="p-2">{user.name}</td>
							<td className="p-2">{user.email}</td>
							<td className="p-2 text-xs font-semibold">
								{user.phone}
							</td>
							<td className="p-2">{user.address.city}</td>
							<td className="p-2">{user.company.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TableUsers
