import { useGetUsersQuery } from "../Services/userApi";

function Userlist() {
    //use the useGetUsersQuery hook to fetch the users from the server
    const { data: users, error, isLoading } = useGetUsersQuery();   

    // loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }   
    // error state
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    // render the list of users
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}   
export default Userlist;
