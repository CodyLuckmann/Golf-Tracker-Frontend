import { useEffect, useState } from "react";
import UpdateCourse from "../UpdateCourse/UpdateCourse";
import SearchBar from '../SearchBar/SearchBar';
import NineHoleForm from "../NineHoleForm/NineHoleForm";




const DisplayCourse = (props) => {
    const [edit, setEdit] = useState(false)
    const [course, setCourse] = useState([])

    const showEdit =(courseToUpdate)=>{
        setCourse(courseToUpdate)
        setEdit(true)
    }

    useEffect(() =>{
        setCourse(props.course)
      },[]);
    

    function filterCourses(searchTerm){
        let foundCourses = props.course.filter(function(element){
          if(searchTerm == ''){
            return course
          }
          else if (element.zip_code == searchTerm){
            return true
          }
    
        })
        setCourse(foundCourses)
      }

    return (
        <>
        <SearchBar filterCourses={filterCourses}/>
        <table>
            <thead>Courses 
            <tr>
                <th>Course</th>
                <th>City</th>
                <th>Zip Code</th>
                <th>9-Hole Par</th>
                <th>18-Hole Par</th>
            </tr>
            </thead>
            <tbody>
                {course.map((course) =>{
                    return(
                    <tr>
                        <td>{course.name}</td>
                        <td>{course.city}</td>
                        <td>{course.zip_code}</td>
                        <td>{course.nine_hole_par}</td>
                        <td>{course.eighteen_hole_par}</td>
                        <button onClick={()=>showEdit(course)}>Edit Course</button>
                        {/* <button onClick={()=>props.deleteCourse(course.id)}>Delete</button> */}
                        <button onClick={()=>props.createPlayedHole(course.id)}>Add 9-Hole Round</button>
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