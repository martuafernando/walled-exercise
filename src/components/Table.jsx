import React from "react";

export default function Table({ columns = [], data = [] }) {
	return (
		<>
			<div>
				<input type="text" name="search" id="search" />

				<div>
					<p>Show</p>
					<select name="selected-row" id="selected-row">
						<option value="last-10">Last 10 transactions</option>
					</select>
				</div>

				<div>
					<p>Sort by</p>
					<select name="selected-date" id="selected-date">
						<option value="date">Date</option>
					</select>
					<select name="date-sorting" id="date-sorting">
						<option value="date">Descending</option>
					</select>
				</div>
			</div>
			<table>
				<thead>
					<tr>
						{columns.map((col, index) => (
							<th key={index}>{col.header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.length === 0 ? (
						<tr>
							<td colSpan={columns.length}>No data available</td>
						</tr>
					) : (
						data.map((row, rowIndex) => (
							<tr key={rowIndex}>
								{columns.map((col) => (
									<td key={col.key}>{row[col.key]}</td>
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
