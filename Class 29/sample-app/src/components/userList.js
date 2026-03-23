import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchUserdata } from "../features/userSlice";

function UserList() {

    const dispatch = useDispatch();

    //get the user data from the redux store

    const { user, loading, error } = useSelector((state) => state.user);

    // run the api call when the component mounts
    useEffect(() => {

        dispatch(fetchUserdata());  
    }, [dispatch]);

    //loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    //error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    // render the user list
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}   
export default UserList;
