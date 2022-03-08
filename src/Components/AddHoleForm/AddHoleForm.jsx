import { useState } from "react";
import './style.css'

const AddHoleForm = (props) => {

    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');
    const [par, setPar] = useState('');
    const [strokes, setStrokes] = useState('');
    const [putts, setPutts] = useState('');
    const [driverDistance, setDriverDistance] = useState('0');
    const [fairway, setFairway] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newHole = {
            course: course,
            date: date,
            hole: props.hole,
            par: par,
            strokes: strokes,
            putts: putts,
            driver_distance:driverDistance,
            fairway: fairway,
        }
        props.handleSubmit(newHole)
    }
  
    

    return (
        <form onSubmit={handleSubmit}> 
            
            <p>{props.hole}</p>

            <label>Course</label>
            <input type='text' onChange={(event) => setCourse(event.target.value)} value={course}/>

            <label>Date</label>
            <input type='date' onChange={(event) => setDate(event.target.value)} value={date}/>

            <label>Par</label>
            <input type='text' onChange={(event) => setPar(event.target.value)} value={par}/>

            <label>Strokes</label>
            <input type='text' onChange={(event) => setStrokes(event.target.value)} value={strokes}/>

            <label>Putts</label>
            <input type='text' onChange={(event) => setPutts(event.target.value)} value={putts}/>

            <label>Driver Distance</label>
            <input type='text' onChange={(event) => setDriverDistance(event.target.value)} value={driverDistance}/>

            <label>Fairway</label>
            <input type='text' onChange={(event) => setFairway(event.target.value)} value={fairway}/>

            <button type='submit'>Create Hole </button>
        </form>
    );
}

export default AddHoleForm;