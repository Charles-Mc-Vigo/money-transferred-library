import React from "react";
import {
	PlusCircleIcon,
	PencilIcon,
	TrashIcon,
} from "@heroicons/react/24/solid";
import useFetch from "../hooks/useFetch";

const TransactionTable = () => {
	const {
		data: transactions,
		loading,
		error,
	} = useFetch("http://localhost:1337/api/transactions?populate=*");

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	console.log(transactions);
	return (
		<div className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
			{/* Search Bar & Add Transaction */}
			<div className="flex flex-wrap justify-between items-center mb-4 space-y-2 sm:space-y-0">
				{/* Search Bar */}
				<div className="border border-gray-200 flex items-center rounded-md px-2 py-1 w-full sm:w-64">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 text-gray-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
					<input
						type="text"
						placeholder="Search transactions"
						className="ml-2 outline-none flex-1 text-sm sm:text-base"
					/>
				</div>

				{/* Add New Transaction Button */}
				<button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto text-sm sm:text-base">
					<PlusCircleIcon className="w-5 h-5 mr-2" />
					Add Transaction
				</button>
			</div>

			{/* Transaction Table */}
			<div className="rounded-md overflow-y-auto flex-1">
				<table className="w-full table-auto border-collapse text-sm sm:text-base">
					<thead className="bg-gray-100">
						<tr>
							<th className="p-2 text-xs sm:text-sm md:text-base">Image</th>
							<th className="p-2 text-xs sm:text-sm md:text-base">Date</th>
							<th className="p-2 text-xs sm:text-sm md:text-base">Amount</th>
							<th className="p-2 text-xs sm:text-sm md:text-base">Actions</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction) => (
							<tr className="text-center" key={transaction.id}>
								<td className="border border-gray-200 p-2 text-xs sm:text-sm md:text-base">
									<img
										src={`http://localhost:1337${transaction.Image.url}`}
										alt="Money Transfer Image"
										className="w-16 h-16 object-cover rounded-md mx-auto" // Fixed size and styling
									/>
								</td>
								<td className="border border-gray-200 p-2 text-xs sm:text-sm md:text-base">
									{transaction.Date}
								</td>
								<td className="border border-gray-200 p-2 text-xs sm:text-sm md:text-base">
									{transaction.Amount}
								</td>
								<td className="border border-gray-200 p-2 flex justify-center space-x-2">
									<button className="bg-blue-500 text-white p-2 rounded-md">
										<PencilIcon className="w-5 h-5" />
									</button>
									<button className="bg-red-500 text-white p-2 rounded-md">
										<TrashIcon className="w-5 h-5" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TransactionTable;
