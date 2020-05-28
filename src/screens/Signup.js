import React, { Fragment } from 'react'
import {Form,Button,Container,Row,Col,Nav} from 'react-bootstrap'
import Mynavbar from '../components/Mynavbar';
import '../components/login.css'
import {useForm} from 'react-hook-form'
import {ExclamationTriangleFill} from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'

const Signup=(props)=>{
    const {register,errors,handleSubmit}=useForm()
    const onSubmit=(data)=>console.log(data)
    return(
        <Fragment>
            <Mynavbar >
            <Nav className="ml-auto">
    			<Link to='/'>
    				<Button variant="outline-primary" >Home</Button>
   				</Link>
			</Nav>
            </Mynavbar>
            <Container className="main shadow p-3 mb-5 rounded" >
                        <Form onSubmit={handleSubmit(onSubmit)} className="block" >
                            <h2>Signup Form</h2>
                            <Row className="myrow">
                            
                                <Form.Label column sm='4' >RegNo:   </Form.Label>
                             
                                <Col sm={12} >
                                <Form.Control type="text" placeholder="Regno" name="Regno" ref={register({required: true,minLength:10, pattern:/20[0-9]{2}50[0-9]{4}$/ })}>
                                </Form.Control>
                                <span className="text-danger" style={{paddingTop:"5px"}}>
                                {errors.Regno &&  <p> <ExclamationTriangleFill/> invalid regno</p>}
                                </span>
                                </Col>
                                </Row>
                                <Row className="myrow">
                            
                                <Form.Label column sm='4' >Email:   </Form.Label>
                             
                                <Col sm={12} >
                                <Form.Control type="email" placeholder="Email" name="Email" ref={register({required: true,minLength:10, pattern:/20[0-9]{2}50[0-9]{4}$/ })}>
                                </Form.Control>
                                <span className="text-danger" style={{paddingTop:"5px"}}>
                                {errors.Regno &&  <p> <ExclamationTriangleFill/> invalid regno</p>}
                                </span>
                                <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
                                </Col>
                                </Row>
                            
                            <Form.Group as={Row} className="myrow">
                                <Form.Label column sm='4'  >Password:</Form.Label>
                                <Col sm={12} >
                                <Form.Control type="password" placeholder="Password" name="Password" ref={register({required:true, minLength: 8})}>
                                </Form.Control>
                                <span className="text-danger" style={{paddingTop:"5px"}}>
                                {errors.Password && <p> <ExclamationTriangleFill/> password should be minimum 8 characters </p>}
                                </span>
                                </Col>
                            </Form.Group >
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <Button  variant="primary" type="submit" name="submit">Login</Button>
                            </div>
                                    
                                
                            
                        </Form>
                        
                   
             </Container>
        </Fragment>
        
    )
}

export default Signup;