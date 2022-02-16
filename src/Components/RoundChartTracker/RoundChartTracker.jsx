import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios';



const RoundChartTracker = (props) => {

    const jwt = localStorage.getItem('token');
    const [chartData, setChartData] = useState([]);
    const [totals, setTotals] = useState([]);

    useEffect(() => {
        // getTotalsForCourse(props.selectedCourse.id);
        // something()
        
        if (props.selectedCourse){
            getTotalsForCourse(props.selectedCourse.id);
            something();
        }
      },[props.selectedCourse]);
    
    
    async function getTotalsForCourse(course_id){
        console.log("Inside the function getTotalsForCourse")
        let response = await axios.get(`http://127.0.0.1:8000/api/playedhole/alldates/${course_id}`, {headers: {Authorization: 'Bearer ' + jwt}});
        setTotals(response.data);
        console.log("Course Totals: ", response.data);
    
    }


    const something = () => {
        let chartArray = []
        // let headingsArray = ["Date", "Total Strokes"]
        // chartArray[0] = headingsArray
        for (let i =0; i<totals.length; i++){
            chartArray.push([totals[i].date, totals[i].strokes__sum])
            
        }
 
        

        console.log("Chart Array: ", chartArray) 
        setChartData(chartArray)
        
    }
   
    
    
    if (chartData){


    
    return(
        
        <Chart
        chartType="Line"
        data={[["Date", "Total Strokes"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
        />
        
    )}else{
        return <p>Loading</p>
    };
}

export default RoundChartTracker;