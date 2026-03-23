function Usercard({ username, age, isLoggedIn, userinfo, skills  }) {
    return (
        <div>
            <h1>Usercard Component</h1>
            <p>Username : {username}</p>
            <p>Age : {age}</p>  
            <p>Is Logged In : {isLoggedIn ? "Yes" : "No"}</p>
            <h2>User Info</h2>
            <p>Name : {userinfo.name}</p>
            <p>City : {userinfo.city}</p>
            <p>State : {userinfo.state}</p>
            <p>Pincode : {userinfo.pincode}</p>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default Usercard;