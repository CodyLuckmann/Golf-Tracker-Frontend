import React, {useState} from "react";

const CourseForm = (props) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [nineHolePar, setNineHolePar] = useState('');
    const [eighteenHolePar, setEighteenHolePar] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let newCourse = {
            name: name,
            city: city,
            zip_code: zipCode,
            nine_hole_par: nineHolePar,
            eighteen_hole_par: eighteenHolePar,

        }
        props.createCourse(newCourse);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>
            <label>City</label>
            <input type='text' onChange={(event) => setCity(event.target.value)} value={city}/>
            <label>Zip Code</label>
            <input type='text' onChange={(event) => setZipCode(event.target.value)} value={zipCode}/>
            <label>9-hole Par</label>
            <input type='text' onChange={(event) => setNineHolePar(event.target.value)} value={nineHolePar}/>
            <label>18-hole Par</label>
            <input type='text' onChange={(event) => setEighteenHolePar(event.target.value)} value={eighteenHolePar}/>
            <button type='submit'>Create Course</button>

        </form>
    );
}

export default CourseForm