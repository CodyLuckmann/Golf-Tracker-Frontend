import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistraionForm/RegistrationForm';
import NavBar from './Components/NavBar/NavBar';
import jwt_decode from 'jwt-decode';




function App() {

  const [course, setCourses] = useState([]);

  useEffect(() =>{
    getAllCourses()
    const jwt = localStorage.getItem('token');
      try{
        const decodedUser = jwt_decode(jwt);
        setUser(decodedUser);
      } catch {}
  },[]);

  async function updateCourse(pk, updateCourse){

    let response =await axios.put(`http://127.0.0.1:8000/api/course/update/${pk}/`, updateCourse)
    if(response.status === 200){
      getAllCourses();
    }
  }
  
  async function createCourse(newCourse){

    let response = await axios.post('http://127.0.0.1:8000/api/course/', newCourse);
    if(response.status ===201){
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
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
