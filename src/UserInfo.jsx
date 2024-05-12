import useSWR from 'swr';

const fethcer = (...args) => fetch(...args).then(response=>response.json())

function UserInfo({ UserName }) {

    const {data, error, isLoading} = useSWR (, fethcer)

}
export default UserInfo;
