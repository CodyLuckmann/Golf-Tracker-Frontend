import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistraionForm/RegistrationForm';
import NavBar from './Components/NavBar/NavBar';
import jwt_decode from 'jwt-decode';
import DisplayCourse from './Components/DisplayCourse/DisplayCourse';
import CourseForm from './Components/CreateCourse/CreateCourse';



function App() {

  const [course, setCourses] = useState([]);
  const jwt = localStorage.getItem('token');

  const [user, setUser] = useState(null);
  
  useEffect(() =>{
    getAllCourses()

      try{
        const decodedUser = jwt_decode(jwt);
        setUser(decodedUser);
      } catch {}
  },[]);

  async function deleteCourse(pk){

    let response = await axios.delete(`http://127.0.0.1:8000/api/course/delete/${pk}`, {headers: {Authorization: 'Bearer ' + jwt}});
    if(response.status ===204){
      getAllCourses();
    }
  }

  async function updateCourse(pk, updateCourse){

    let response =await axios.put(`http://127.0.0.1:8000/api/course/update/${pk}`, updateCourse, {headers: {Authorization: 'Bearer ' + jwt}});
    if(response.status === 200){
      getAllCourses();
    }
  }
  
  async function createCourse(newCourse){

    let response = await axios.post('http://127.0.0.1:8000/api/course/', newCourse, {headers: {Authorization: 'Bearer ' + jwt}});
    if(response.status ===201){
      window.location = '/courses'
      await getAllCourses();
    }
  }

  async function getAllCourses(){

    let response = await axios.get('http://127.0.0.1:8000/api/course/all/');
    setCourses(response.data);
  }
  return (
    <div>
      <Router>
      <NavBar user={user}/>
        <Routes>
          <Route path="/register" element={<RegistrationForm />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/courses" element={<DisplayCourse course={course} getAllCourses={getAllCourses} updateCourse={updateCourse} deleteCourse={deleteCourse} />} />
          <Route path="/addcourse" element={<CourseForm createCourse={createCourse}/>}/>
        </Routes>
        
        
      </Router>
      
      
    </div>
  );
}

export default App;
