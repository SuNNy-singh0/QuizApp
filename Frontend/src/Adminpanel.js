import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import empservice from './service/empservice'
function Adminpanel() {
  const[emplist,setemplist]=useState([]);
  useEffect(()=>{
    empservice.getallContent().then((res)=>{
      console.log(res.data);
    setemplist(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  const deleteContent = (id)=>{
    console.log(id);
    empservice.deleteContent(id).then(()=>{
      setemplist((prevEmplist) => prevEmplist.filter((e) => e.id !== id));
    }).catch((error)=>{
      console.log(error);
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

                    <li><NavLink to="Addemp">Add emp</NavLink></li>
                    <li><NavLink to="/Verify">Back to Home</NavLink></li>

                </ul>

            </nav>
        </div>
    </section>  
<section>
<table class="table">
  <thead>
    <tr>
      <th scope="col" style="">Ques no.</th>
      <th scope="col">Question</th>
      <th scope="col">option 1 </th>
      <th scope="col">option 2</th>
      <th scope="col">option 3</th>
      <th scope="col">option 4</th>
      <th scope="col">Correct Option </th>
      <th scope="col">Operation </th>
    </tr>
  </thead>
  <tbody>
  {emplist.map((e, num) => (
                <tr key={num}> {/* Add a unique key prop */}
                  <th scope="row">{num + 1}</th>
                  <td>{e.problem}</td>
                  <td>{e.option1}</td>
                  <td>{e.option2}</td>
                  <td>{e.option3}</td>
                  <td>{e.option4}</td>
                  <td>{e.correctoption}</td>
                  <td>
                    <a onClick={()=>deleteContent(e.id)}><button className='btn4'>Delete</button></a>
                  </td>
                </tr>
              ))}
    
  </tbody>
</table>
</section>
</header>
    </>
  )
}

export default Adminpanel