import Students from "./components/Students";

function App() {

//object

const user = {
  name : "Parin",
  city : "Surat",
  state : "Gujarat",
  pincode : "395007"
}

// array editor
const skills = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];


  return (
    <>
    <Usercard
    usernmae="Parin"
    age={22}
    isLoggedIn={true}
    userinfo={user}
    skills={skills}

    />
    <div>
      <Students name="Parin" city="Surat" state="Gujarat" pincode="395007" />
      <Students name="Manikanta" city="Bangalore" state="Karnataka" pincode="560001" />
      <Students name="Satyarth" city="Mumbai" state="Maharashtra" pincode="400001" />
      <Students name="Satyarth" city="Raipur" state="Chhattisgarh" pincode="492001" />
      <Students name="Aarush" city="Hyderabad" state="Telangana" pincode="500001" />
    </div>
  );
}

export default App;
