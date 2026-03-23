

function Students(props) {

    //destructuring 2nd way
    const {name, city, state, pincode} = props;
    return (
        <div>
            Name is : {name} 
            City is : {city}
            State is : {state}
            Pincode is : {pincode}
        </div>  
    )
}

export default Students;



