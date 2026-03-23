

// function to fetch the users from the api 

export const fetchUsersAPI = async () => {

    // fetch the users from the jsonplaceholder

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    // convert response to json

    const data = await response.json();

    //return the user data
     return data;
}