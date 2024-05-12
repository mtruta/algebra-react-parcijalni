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

	if (data.status === 404) {
		return <p>{userName} not found. Try another input</p>;
	}

	const { avatar_url, name, location, bio } = data;

	// return <pre style={{ textAlign: 'left' }}>{JSON.stringify(data, null, 2)}</pre>;

	return (
		<div style={{ textAlign: 'left' }}>
			<p>
				Avatar_URL: <b>{avatar_url}</b>
			</p>
			<p>
				Name: <b>{name}</b>
			</p>
			<p>
				Location: <b>{location}</b>
			</p>
			<p>
				Bio: <b>{bio}</b>
			</p>
		</div>
	);
}

export default UserInfo;
