import { useState } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserInfo from './UserInfo';

// https://api.github.com/users/

// https://api.github.com/users/facebook

function App() {
	const [currentSearch, setCurrentSearch] = useState(null);
	return (
		<>
			<p className='git-hub'>GitHUB username:</p>
			<UserInput
				onComplete={(inputValue) => {
					setCurrentSearch(inputValue);
				}}
			/>
			{currentSearch && <UserInfo userName={currentSearch} />}
		</>
	);
}

export default App;
