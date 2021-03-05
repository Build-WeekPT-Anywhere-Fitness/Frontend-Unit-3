import React,{useState} from "react";
import {fetchClasses,deleteClass,updateClass} from "../actions/classActions";
import {useParams,useHistory} from "react-router-dom";
import ClassCard from "./ClassCard";

const initialState =({
    classes=[]
})


function Classes({addToEnrolledClasses}){
    const [fitclass, setFitClass] = useState(initialState);

    const params = useParams();
    const { id } = useParams();
    const { push } = useHistory();



        useEffect(() =>{
            fetchClasses()
        },[params.id])

        if (!fitclass){
            return <div>Loading classes...</div>;
        }
        const enrolledClass = ()=>{
            addToEnrolledClasses(fitclass)
        }

        return(
            <div className="save-wrapper">
                <ClassCard fitclass={fitclass} enrolledClass={enrolledClass}/>
                <div className="save-button" onClick={enrolledClass}>
                Enroll
            </div>
            <button className="update-button" onClick={() =>{
        push(`auth/instructor/classes/${id}`)
      }}>
        Edit
      </button>
      <button className="delete-button" onClick={deleteClass}>
  Delete Movie
</button>
            </div>
        )
}