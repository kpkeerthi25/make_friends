import React, { Fragment,useEffect } from 'react'
import {Button,Nav, Container,Row,Col} from'react-bootstrap'
import {useHistory,Link, Redirect} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {initLogout,initRooms} from '../store/action/UserAction'
import axios from 'axios'

import Mynavbar from '../components/Mynavbar'

const UserPage=(props)=>{
    const token=useSelector(state=>state.UserRed.token)
    const error=useSelector(state=>state.UserRed.error)
    const history=useHistory()
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.interceptors.request.use((config)=>{
            if(!token)
            return config;
            config.headers.authorization='Bearer '+token;
            return config;
        })
    },[token])

        // if(error)
        // {
        //     dispatch(initLogout());
        // }

    return(
        
        <Fragment>
            <Mynavbar>
            <Nav className="ml-auto">
    			<Link to='/'>
    				<Button variant="outline-primary"  onClick={()=>{dispatch(initLogout())}} >Logout</Button>
   				</Link>
			</Nav>
            </Mynavbar>
            <Button onClick={()=>{dispatch(initRooms())}}>room</Button>
            <Container fluid >
                <Row style={{height:'100vh',justifyContent:'space-around'}}>
                    <Col xs={2} className=" p-3 mb-3 border-right " >
                        <h3>online</h3>
                    </Col>
                    <Col xs={10}className=" p-3 mb-3  rounded " >
                    <h1>User page</h1>
                    </Col>
                </Row>
            </Container>
        
        </Fragment>
    )
}

export default UserPage;