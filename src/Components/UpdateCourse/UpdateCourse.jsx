import React, {useState} from "react";

const UpdateCourse = (props) => {
    const [name, setName] = useState(props.course.name);
    const [city, setCity] = useState(props.course.city);
    const [zipCode, setZipCode] = useState(props.course.zip_code);
    const [nineHolePar, setNineHolePar] = useState(props.course.nine_hole_par);
    const [eighteenHolePar, setEighteenHolePar] = useState(props.course.eighteen_hole_par);

    function handleSubmit(formEvent){
        // formEvent.preventDefault();
        let updatedCourse = {
            name: name,
            city: city,
            zip_code: zipCode,
            nine_hole_par: nineHolePar,
            eighteen_hole_par: eighteenHolePar,

        }
        props.updateCourse(props.course.id, updatedCourse);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' onChange={(event) => setName(event.target.value)} defaultValue={name}/>
            <label>City</label>
            <input type='text' onChange={(event) => setCity(event.target.value)} defaultValue={city}/>
            <label>Zip Code</label>
            <input type='text' onChange={(event) => setZipCode(event.target.value)} defaultValue={zipCode}/>
            <label>9-hole Par</label>
            <input type='text' onChange={(event) => setNineHolePar(event.target.value)} defaultValue={nineHolePar}/>
            <label>18-hole Par</label>
            <input type='text' onChange={(event) => setEighteenHolePar(event.target.value)} defaultValue={eighteenHolePar}/>
            <button type='submit'>Edit</button>

        </form>
    );
}

export default UpdateCourse;