import { useState } from 'react';
import './App.css';
import UserInput from './UserInput';

// https://api.github.com/users/

// https://api.github.com/users/facebook

function App() {
	const [currentSearch, setCurrentSearch] = useState(null);
	return (
		<>
			<h1>Search user</h1>
			<UserInput
				onComplete={(inputValue) => {
					setCurrentSearch(inputValue);
				}}
			/>
			{currentSearch}
		</>
	);
}

export default App;
