import React from 'react'
import {Jumbotron,Button,Container} from 'react-bootstrap'

const HomepageJumbotron=(props)=>{
    return(
        <Container className="main shadow p-3  rounded" >
                    <Jumbotron style={{height:"100%"}}>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>                   
</Container>
    )
}

export default HomepageJumbotron;