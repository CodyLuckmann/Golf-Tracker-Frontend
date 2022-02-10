import { useState } from "react";

const EighteenHoleForm = (props) => {

    const [user, setUser] = useState('');
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');
    const [hole, setHole] = useState('');
    const [par, setPar] = useState('');
    const [strokes, setStrokes] = useState('');
    const [putts, setPutts] = useState('');
    const [driverDistance, setDriverDistance] = useState('');
    const [fairway, setFairway] = useState('');


function handleSubmit(formEvent){
    formEvent.preventDefault();
    let newEighteen = {
        user: user,
        course: course,
        date: date,
        hole: hole,
        par: par,
        strokes: strokes,
        putts: putts,
        driver_distance: driverDistance,
        fairway: fairway,
    }
    props.createEighteen(newEighteen);
}

return (
    <form onSubmit={handleSubmit}>
        <label>User</label>
        <input type='text' onChange={(event) => setUser(event.target.value)} value={user}/>

        <label>Course</label>
        <input type='text' onChange={(event) => setCourse(event.target.value)} value={course}/>

        <label>Date</label>
        <input type='date' onChange={(event) => setDate(event.target.value)} value={date}/>
       
        <label>Hole #</label>
        <input type='text' onChange={(event) => setHole(event.target.value)} value={hole}/>

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

        <button type='submit'>Create 18 Hole Round</button>
    </form>
);
}

export default EighteenHoleForm;