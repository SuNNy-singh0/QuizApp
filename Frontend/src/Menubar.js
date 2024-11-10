import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menubar() {
  return (
 <>
<header>
<section id="header">
        <a href="#"><h1>Quiz world</h1></a>
        <div>
            <nav>
                <ul id="navbar">

                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="Verify">Admin</NavLink></li>

                </ul>

            </nav>
        </div>
    </section>  

</header>
 </>
  )
}

export default Menubar