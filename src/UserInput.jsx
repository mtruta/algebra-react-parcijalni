import './App.css';

function UserInput({ onComplete }) {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				const formElement = event.target;
				const inputElement = formElement.search;
				const inputValue = inputElement.value;
				if (!inputValue) return;
				onComplete(inputValue);

				console.log({ formElement, inputElement });
			}}>
			<input type='text' id='search' placeholder='e.g.facebook' />
			<br />
			<button type='submit'>GO!</button>
		</form>
	);
}

export default UserInput;
