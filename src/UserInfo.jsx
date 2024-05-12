import useSWR from 'swr';

const fethcer = (...args) => fetch(...args).then((response) => response.json());

function UserInfo({ userName }) {
	const { data, error, isLoading } = useSWR(
		`https://api.github.com/users/${userName.toLowerCase()}`,
		fethcer
	);

	if (isLoading) {
		return <p>Loading info about {userName}...</p>;
	}
	if (error) {
		return <p>There was an error loading {userName}, please check your input </p>;
	}
	return <pre>{JSON.stringify(data)}</pre>;
}

export default UserInfo;
