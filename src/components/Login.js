import React from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch,useSelector} from 'react-redux'
import './login.css'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import {ExclamationTriangleFill} from 'react-bootstrap-icons'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {loggingIn} from '../store/action/UserAction'

const Login=(props)=>{
    const history=useHistory()
    const dispatch=useDispatch()
    const {register,errors,setError,setValue ,reset,handleSubmit}=useForm()
    const onSubmit=async(data)=>{
        try{
            const user=await axios.post('http://127.0.0.1:3001/user/login',data)
            if(!user)
            throw new Error("invalid credentials")
            console.log(user.data);
            dispatch(loggingIn(user.data))
            history.push('/me')  
        }catch(e){
            // console.log(e);
            setError("login");
            setValue('password','')
        }

    }
    return(
        
            <Container className="main shadow p-3  rounded" >
                        <Form onSubmit={handleSubmit(onSubmit)} className="block" >
                            <h2>Login Form</h2>
                            <Row className="myrow">
                            
                                <Form.Label column sm='4' >RegNo:   </Form.Label>
                             
                                <Col sm={12} >
                                <Form.Control type="text" placeholder="Regno" name="regno" ref={register({required: true,minLength:10, pattern:/20[0-9]{2}50[0-9]{4}$/ })}>
                                </Form.Control>
                                <span className="text-danger" style={{paddingTop:"5px"}}>
                                {errors.regno &&  <p> <ExclamationTriangleFill/> invalid regno</p>}
                                </span>
                                </Col>
                                </Row>
                            <Form.Group as={Row} className="myrow">
                                <Form.Label column sm='4'  >Password:</Form.Label>
                                <Col sm={12} >
                                <Form.Control type="password" placeholder="Password" name="password" ref={register({required:true, minLength: 8})}>
                                </Form.Control>
                                <span className="text-danger" style={{paddingTop:"5px"}}>
                                {errors.password && <p> <ExclamationTriangleFill/> password should be minimum 8 characters </p>}
                                </span>
                                </Col>
                            </Form.Group >
                            <Row style={{justifyContent:"space-around"}}>
                            <Button onClick={reset} variant="primary" name="clear"  >Clear</Button>
                            <Button  variant="primary" type="submit" name="submit">Login</Button>
                            </Row>
                            <Row className="text-danger" style={{paddingTop:"10px",justifyContent:"center"}}>
                            {errors.login && <p> <ExclamationTriangleFill/> invalid regno or password </p>}
                            </Row>   
                        </Form>
                        
                   
             </Container>

        
         
        
    )
    
}

export default Login;