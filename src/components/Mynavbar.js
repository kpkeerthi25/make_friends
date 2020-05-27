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
			<Nav className="ml-auto">
    			<Link to={props.link}>
    				<Button variant="outline-primary">{props.btnName}</Button>
   				</Link>
			</Nav>
   		</Navbar>
    )
}

export default Mynavbar