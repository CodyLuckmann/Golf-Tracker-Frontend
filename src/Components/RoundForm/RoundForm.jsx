import { useState } from "react";
import AddHoleForm from "../AddHoleForm/AddHoleForm";

const RoundForm = (props) =>{

    const [allHoles, setAllHoles] = useState([]);
  
    function handleSubmit(newHole){
        console.log(newHole)
        //add newHole into 'allHoles' hook array
        props.createPlayedHole(newHole);
    }



    const buildForms = ()=>{
        let arrayOfForms = []
        for(let i = 1; i < props.numOfHoles; i++){
            arrayOfForms.push(<AddHoleForm key={i} hole={i} handleSubmit={handleSubmit} />)
        }
        return arrayOfForms;
    }

    return(
        <div>
            <h1 style={{textAlign:'center'}}>Add New Round</h1> 
            {buildForms()} 
        </div>
        
        
   

    )


   



}
export default RoundForm;