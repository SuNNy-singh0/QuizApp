import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import empservice from './service/empservice'
function AddEmp() {
    const[content,setcontent]=useState({
        problem:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        correctoption:""
    })
    const handlechange = (e)=>{
        const {name,value} = e.target;
        setcontent({...content,[name]:value});
    }
    const submitContent=(e)=>{
        e.preventDefault();
        empservice.savecontent(content).then((res)=>{
            alert('Content added successfully');
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <>
       <header>
<section id="header">
        <a href="#"><h1>Adminpanel</h1></a>
        <div>
            <nav>
                <ul id="navbar">
                    <li><NavLink to="/Adminpanel">Back to Admin</NavLink></li>

                </ul>

            </nav>
        </div>
    </section>  

</header>
    <div className='container2'>
        <h1>Add Content</h1>
        <form className='selection' onSubmit={(e)=>submitContent(e)}>
            <label>Enter Question:</label>
            <textarea name='problem' value={content.problem} onChange={(e)=>handlechange(e)}>
  This is simple textarea
</textarea>
            <br></br>
            <br></br>
            <label>Enter option 1:</label>
            <input type="text" name='option1' value={content.option1} onChange={(e)=>handlechange(e)}></input>
            <br></br>
            <br></br>
            <label>Enter option 2:</label>
            <input type="text" name='option2' value={content.option2} onChange={(e)=>handlechange(e)}></input>
            <br></br>
            <br></br>
            <label>Enter option 3:</label>
            <input type="text" name='option3' value={content.option3} onChange={(e)=>handlechange(e)}></input>
            <br></br>
            <br></br>
            <label>Enter option 4:</label>
            <input type="text" name='option4' value={content.option4} onChange={(e)=>handlechange(e)}></input>
            <br></br>
            <br></br>
            <label>Correct option:</label>
            <input type="text" name='correctoption' value={content.correctoption} onChange={(e)=>handlechange(e)}></input>
            <br></br>
            <button type='submit'>Sumit</button>
        </form>
    </div>
    </>
  )
}

export default AddEmp