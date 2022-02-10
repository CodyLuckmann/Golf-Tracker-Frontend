import { useState } from "react";
import UpdateCourse from "../UpdateCourse/UpdateCourse";




const DisplayCourse = (props) => {
    const [edit, setEdit] = useState(false)
    const [course, setCourse] = useState('')

    const showEdit =(courseToUpdate)=>{
        setCourse(courseToUpdate)
        setEdit(true)
    }

    return (
        <>
        <table className="table">
            <thead>Courses 
            <tr>
                <th>Course</th>
                <th>City</th>
                <th>Zip Code</th>
            </tr>
            </thead>
            <tbody>
                {props.course.map((course) =>{
                    return(
                    <tr>
                        <td>{course.name}</td>
                        <td>{course.city}</td>
                        <td>{course.zip_code}</td>
                        <button onClick={()=>showEdit(course)}>Edit</button>
                        <button onClick={()=>props.deleteCourse(course.id)}>Delete</button>
                    </tr>
                    );
                })}
            </tbody>
        </table>

        {edit && <UpdateCourse updateCourse={props.updateCourse} course = {course}/>}
        </>
    );
}

export default DisplayCourse