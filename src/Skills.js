import { useState } from "react"; 
import './Skills.css';

const Skills =()=>{

    const [skills,setSkills] = useState(['React JS','HTML','CSS','Java script','corejava','mysl','git','jira']);
    const addSkill =()=>{
        const newSkill = prompt('Enter new skill');
        if(newSkill){
            setSkills([...skills,newSkill]);
        }
    };

    const deleteSkill = (index)=>{
        const updatedSkills = [...skills];
        updatedSkills.splice(index,1);
        setSkills(updatedSkills);
    }
    return(
      <>
      <div className="skill-container">
        <div className="skill-set">
            <ul className="skill-list">
                {skills.map((skill, index) => (
                    <li key={index}><span className="skill-name">{skill}</span>
                        <span><i class="fa-solid fa-circle-xmark" onClick={() => deleteSkill(index)}></i></span>
                    </li>

                ))}
            </ul>

        </div><button className="add-butto" onClick={addSkill}>Add Skill</button></div></>
    )
}

export default Skills;