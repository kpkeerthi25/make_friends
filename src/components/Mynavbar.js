import React from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Mynavbar=(props)=>{
    return(
        <Navbar bg="dark" variant="dark" style={{marginBottom:"20px"}}  >
        	<Nav>
				<Link to='/home'>
    				<Navbar.Brand>
      					<img
        				 alt=""
        				 src="/logo.svg"
        				 width="30"
        				 height="30"
        				 className="d-inline-block align-top"
      					/>
     					 Project Name*
    				</Navbar.Brand>
				</Link>
    		</Nav>
			{props.children}
   		</Navbar>
    )
}

export default Mynavbar