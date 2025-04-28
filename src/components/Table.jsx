import "./Table.css";
import React, { useState, useEffect } from "react";

export default function Table({ data = [], onQuery }) {
	const columns = Object.keys(data[0] ?? {});

	const [query, setQuery] = useState("");
	const [sortBy, setSortBy] = useState("");
	const [sortOrder, setSortOrder] = useState("");

	useEffect(() => {
		if (!query && (!sortBy || !sortOrder)) {
			return;
		}

		onQuery({
			query,
			sortBy,
			sortOrder,
		});
	}, [query, sortBy, sortOrder, onQuery]);

	return (
		<>
			<div className="table-controller">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="search..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>

				<div className="input-controller">
					<p>Show</p>
					<select name="selected-row" id="selected-row">
						<option value="last-10">Last 10 transactions</option>
					</select>
				</div>

				<div className="input-controller">
					<p>Sort by</p>
					<select
						name="selected-date"
						id="selected-date"
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}
					>
						{Object.keys(data[0] ?? {}).map((it) => {
							return (
								<option key={it} value={it}>
									{it}
								</option>
							);
						})}
					</select>
					<select
						name="sort-order"
						id="sort-order"
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
					>
						<option value="asc">Ascending</option>
						<option value="desc">Descending</option>
					</select>
				</div>
			</div>

			<table>
				<thead>
					<tr>
						{columns.map((col) => (
							<th key={col}>{col}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.length === 0 ? (
						<tr>
							<td colSpan={columns.length}>No data available</td>
						</tr>
					) : (
						data.map((row) => (
							<tr key={row.id}>
								{columns.map((col) => (
									<td key={col}>{row[col]}</td>
								))}
							</tr>
						))
					)}
				</tbody>
			</table>

			<div>
				<button type="button" onClick={() => {}} disabled>
					First
				</button>

				<button type="button" onClick={() => {}}>
					1
				</button>
				<button type="button" onClick={() => {}}>
					2
				</button>
				<button type="button" onClick={() => {}}>
					3
				</button>

				<button type="button" onClick={() => {}}>
					Next
				</button>
			</div>
		</>
	);
}
