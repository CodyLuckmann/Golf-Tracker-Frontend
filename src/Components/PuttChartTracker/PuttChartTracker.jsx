import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios';



const PuttChartTracker = (props) => {

    const jwt = localStorage.getItem('token');
    const [puttData, setPuttData] = useState([]);
    const [putttotals, setPuttTotals] = useState([]);

    useEffect(() => {
        
        if (props.selectedCourse){
            getPuttTotalsForCourse(props.selectedCourse.id);
            
        }
      },[props.selectedCourse]);

      useEffect(() => {
          if(putttotals && putttotals.length > 0){
            
              puttTotal();
          }
      },[putttotals]);
    
    
    async function getPuttTotalsForCourse(course_id){
        console.log("Inside the function getPuttTotalsForCourse")
        let response = await axios.get(`http://127.0.0.1:8000/api/playedhole/alldates/${course_id}`, {headers: {Authorization: 'Bearer ' + jwt}});
        setPuttTotals(response.data);
        console.log("Course putt Totals: ", response.data);
    
    }


    

    const puttTotal = () => {
        let puttArray = []

        for (let i = 0; i<putttotals.length; i++){
            puttArray.push([putttotals[i].date, putttotals[i].putt__sum])
        }

        console.log("puttArray", puttArray)
        setPuttData(puttArray)
    }
   
    
    
    if (puttData){

    
    return(
        
        <Chart
        chartType="Line"
        data={[["Date", "Total Putt Strokes"], ...puttData]}
        width="100%"
        height="400px"
        legendToggle
        />
        
    )}else {
        
        return <p>Loading</p>
    };
}

export default PuttChartTracker;