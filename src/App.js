import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { TODOS_URL } from './utils/url';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch(TODOS_URL)
			.then((response) => response.json())
			.then((todos) => setTodos(todos));
	});
	return (
		<div className={styles.app}>
			<ol className={styles.dataContainer}>
				{todos.map(({ id, title }) => {
					return (
						<a href='#' key={id}>
							<li>{title}</li>
						</a>
					);
				})}
			</ol>
		</div>
	);
};
