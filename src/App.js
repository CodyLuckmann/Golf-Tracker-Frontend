import React, { useState, useEffect } from 'react';
import axios from 'axios';




function App() {

  const [course, setCourses] = useState([]);

  useEffect(() =>{
    getAllCourses()
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
      <h3>Golf Tracker</h3>
      
    </div>
  );
}

export default App;
