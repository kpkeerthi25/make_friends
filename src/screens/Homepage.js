import React, { Fragment, useEffect } from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import {useSelector} from 'react-redux'

import Mynavbar from '../components/Mynavbar'
import Login from '../components/Login'
import HomepageJumbotron from '../components/HomepageJumbotron'


const Homepage=(props)=>{
    const isLoggedIn=useSelector(state=>state.UserRed.isAuthenticated)
    return(
        <Fragment>
            <Mynavbar link="/signup" btnName="Sign up"/>
            <Container fluid>
            	<Row style={{marginTop:"20px"}}>
                	<Col   xs={{order:1,span:12}} md={{span:8,order:0}} lg={9} style={{marginBottom:"10px"}}>
                  		<HomepageJumbotron/>
                	</Col>
					<Col md={4} xs={12} style={{alignItems:"center",flex:1 ,marginBottom:"20px"}}>
                    	<Login />
                    </Col>
            	</Row>
            </Container>
        </Fragment>
    )
}

export default Homepage