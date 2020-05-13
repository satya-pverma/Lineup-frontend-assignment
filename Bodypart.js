import React,{Component} from 'react';
import './Bodypart.css';
import $ from 'jquery';
import {Test} from './Test'
import { findDOMNode } from 'react-dom';
import {Row,Col,Container,Card,ListGroup,ListGroupItem,Button,ButtonToolbar} from 'react-bootstrap';
class Bodypart extends Component
{
constructor()
{
	super();
	this.state={
		showme1:false
	}
	
	this.state={
		showbtn1:true
	}
	
}

operation()
{
	this.setState({
		showme1:true
		
	})
	
	this.setState({
		showbtn1:false
	})
	
}



	render()
	{
		
		return(

				<div>
					<Container fluid className="mt-2 bg-light mr-auto mx-auto float-right mb-4" style={{borderTop:'2px solid grey'}}>
					  <Row className="mt-2">
					    <Col className="bg-light mr-2"  xs={2} sm={2} style={{borderRight: ' 2px solid black'}}>
					    <h6 className="">Navigation</h6><br />
					   
					    	<a href="#" className="">Dashboard</a><br />
					    	<a href="#" className="">Candidates</a>
					    	<hr className="bg-dark"></hr>
					    <h6 className="">Jobs</h6><br />
					    <a href="#" className="">Live Jobs</a><br />
					    	<a href="#" className="">Accepted Jobs</a> <br />
					    	<a href="#" className="">Rejected Jobs</a>
					    	<hr className="bg-dark"></hr>
					    	
					   
					    </Col>
					    <Col xs={8} md="auto" sm={8} className="bg-light mr-auto mx-auto float-right">
					 		<Col size="2"  md="auto" sm={4}> 
								  <Card className="cardds" style={{ width: '20rem', height: '25rem', border: '2px solid black', borderRadius: '25px' }}>
											  <Card.Img variant="top-center" className="ml-3" src="mob.png/100px180?text=Image cap" />
											  <Card.Body>
											    <Card.Title>Job Title</Card.Title>
											    <Card.Text>
											     <h6> Company Name</h6>
											     Department,Location
											     <hr className="bg-dark"></hr>
											    </Card.Text>
											  </Card.Body>
											  <ListGroup className="list-group-flush">
									
											    <ListGroupItem>
											     <img src="mob2.png " width="25px"/> 12345
											      <img src="exp1.jpg " className="ml-5" width="30px"/> 7-10yrs

											    </ListGroupItem>
											    <ListGroupItem>
											    	 <img src="time.png " width="30px"/> full time
											    </ListGroupItem>
											    <ListGroupItem>
											    	<img src="avatar.png " width="30px"/>3 candidates
												    	<img src="salary.png " className="ml-4" width="30px"/>23-25 lkh
												    </ListGroupItem>
												  </ListGroup>
												  {
											  	this.state.showme1?
											  <div>
											  	<p className="  text-center text-danger">you are rejected</p>
											 	</div>
											 	:null
											 	}

											 	{
											 	this.state.showbtn1?
											 	<div>
											  <Card.Body className="text-center" >
											  
											  	
											  
											  <button type="button"  className="btn bg-success text-light">Accept </button>
												    <button type="button" onClick={()=>this.operation()} className="btn ml-5 bg-danger ">Reject </button>
											   
											  
											
											  </Card.Body>
											  </div>
											  :null
											} 
											</Card>
							</Col>
							</Col>
							 <Col xs={8} md="auto" sm={8} className="bg-light mr-auto  mx-auto float-right">
							    <Col size="2" md="auto" sm={10} className="bg-light  ml-auto ">
								    <Card style={{ width: '20rem',height: '25rem', border: '2px solid black', borderRadius: '25px' }}>
											  <Card.Img variant="top" className="mx-auto mr-auto text-center" src="holder.js/100px180?text=Image cap" />
								  <Card.Body>
								    <Card.Title>Job Title</Card.Title>
								    <Card.Text>
								      <h6> Company Name</h6>
								     Department,Location
								   <hr className="bg-dark"></hr>
								    </Card.Text>
								  </Card.Body>
								  <ListGroup className="list-group-flush">
						
								    <ListGroupItem>
								     <img src="mob2.png " width="25px"/> 12345
								      <img src="exp1.jpg " className="ml-5" width="30px"/> 7-10yrs

								    </ListGroupItem>
								    <ListGroupItem>
								    	 <img src="time.png " width="30px"/> full time
								    </ListGroupItem>
								    <ListGroupItem>
								    	<img src="avatar.png " width="30px"/>3 candidates
								    	<img src="salary.png " className="ml-4" width="30px"/>23-25 lkh
								    </ListGroupItem>
								  </ListGroup>
								<Card.Body className="text-center">
								   <button type="button" className="btn bg-success text-light">Accept</button>
								    <button type="button" className="btn ml-5 bg-danger ">Reject</button>
								   
								  </Card.Body>
								 
								</Card>
					    </Col>
					    </Col>
					     <Col xs={8} md="auto" sm={8} className="bg-light mr-auto  mx-auto float-right" >
					    <Col size="2" md="auto" sm={8} className="bg-light ml-auto">
					    <Card style={{ width: '20rem', border: ' 2px solid black ', height:'25rem',  borderRadius: '25px' }}>
								  <Card.Img variant="top" className="ml-3" src="holder.js/100px180?text=Image cap" />
								  <Card.Body>
								    <Card.Title>Job Title</Card.Title>
								    <Card.Text>
								       <h6> Company Name</h6>
								      Department,Location
								     <hr className="bg-dark"></hr>
								    </Card.Text>
								  </Card.Body>
								  <ListGroup className="list-group-flush">
						
								    <ListGroupItem>
								     <img src="mob2.png " width="25px"/> 12345
								      <img src="exp1.jpg " className="ml-5" width="30px"/> 7-10yrs

								    </ListGroupItem>
								    <ListGroupItem>
								    	 <img src="time.png " width="30px"/> full time
								    </ListGroupItem>
								    <ListGroupItem>
								    	<img src="avatar.png " width="30px"/>3 candidates
								    	<img src="salary.png " className="ml-4" width="30px"/>23-25 lkh
								    </ListGroupItem>
								  </ListGroup>
								  <Card.Body className="text-center">
								   <button type="button" className="btn bg-success text-light">Accept</button>
								    <button type="button" className="btn ml-5 bg-danger ">Reject</button>
								   
								  </Card.Body>
								</Card>

					    </Col>
					  </Col>
					   <Col xs={2} md="auto" sm={2} className="bg-light ml-5 top float-right">
					    <Col xs={2} sm={8} className=" mr-auto mx-auto mt-3 " style={{ marginLeft: ' 2px'}} >
							 <img src="s.png " className="bg-dark mt-4 " width="30px"/><br/><br />
							 <img src="f.png " className="bg-dark mr-auto mx-auto " width="30px"/><br/><br />
							  <img src="sr.png " className=" bg-dark " width="30px"/><br />
							  
					    </Col>
					    </Col>
					  </Row>
					  <Row className="mt-5" >
					  			 <Col className="bg-light" xs={2} style={{marginTop: '-90px',borderRight: '2px solid black'}}>
					   				 <h6 className="">Support</h6><br />
					    <a href="#" className="">Help Desk</a><br />
					    	<a href="#" className="">Tutorial</a> <br />
					    	<a href="#" className="">Feedback</a>
					    	<hr className="bg-dark"></hr>
					    </Col>
					    <Col xs={8} md="auto" sm={8} className="bg-light mr-auto  mx-auto float-right">
					    <Col xs={2} md="auto" sm={3} className="bg-light ml-2">
					    <Card style={{ width: '20rem',height:'25rem',border: '2px solid black', borderRadius: '25px'}}>
								  <Card.Img variant="top" className="ml-3" src="holder.js/100px180?text=Image cap" />
								  <Card.Body>
								    <Card.Title>Job Title</Card.Title>
								    <Card.Text>
								       <h6> Company Name</h6>
								      Department,Location
								    <hr className="bg-dark"></hr>
								    </Card.Text>
								  </Card.Body>
								  <ListGroup className="list-group-flush">
						
								    <ListGroupItem>
								     <img src="mob2.png " width="25px"/> 12345
								      <img src="exp1.jpg " className="ml-5" width="30px"/> 7-10yrs

								    </ListGroupItem>
								    <ListGroupItem>
								    	 <img src="time.png " width="30px"/> full time
								    </ListGroupItem>
								    <ListGroupItem>
								    	<img src="avatar.png " width="30px"/>3 candidates
								    	<img src="salary.png " className="ml-4" width="30px"/>23-25 lkh
								    </ListGroupItem>
								  </ListGroup>
								  <Card.Body className="text-center">
								   <button type="button" className="btn bg-success text-light">Accept</button>
								    <button type="button" className="btn ml-5 bg-danger ">Reject</button>
								   
								  </Card.Body>
								</Card>

					    </Col>
					    </Col>
					    <Col xs={8} md="auto" sm={8} className="bg-light mr-auto  mx-auto float-right">
					    <Col size="2" md="auto" sm={8} className="bg-light mx-auto ">
					    <Card style={{ width: '20rem',height:'25rem',border: '2px solid black', borderRadius: '25px' }}>
								  <Card.Img variant="top" className="ml-3" src="holder.js/100px180?text=Image cap" />
								  <Card.Body>
								    <Card.Title>Job Title</Card.Title>
								    <Card.Text>
								       <h6> Company Name</h6>
								       Department,Location
								      <hr className="bg-dark"></hr>
								    </Card.Text>
								  </Card.Body>
								  <ListGroup className="list-group-flush">
						
								    <ListGroupItem>
								     <img src="mob2.png " width="25px"/> 12345
								      <img src="exp1.jpg " className="ml-5" width="30px"/> 7-10yrs

								    </ListGroupItem>
								    <ListGroupItem>
								    	 <img src="time.png " width="30px"/> full time
								    </ListGroupItem>
								    <ListGroupItem>
								    	<img src="avatar.png " width="30px"/>3 candidates
								    	<img src="salary.png " className="ml-4" width="30px"/>23-25 lkh
								    </ListGroupItem>
								  </ListGroup>
								  <Card.Body className="text-center">
								   <button type="button" className="btn bg-success text-light">Accept</button>
								    <button type="button" className="btn ml-5 bg-danger ">Reject</button>
								   
								  </Card.Body>
								</Card>
					    </Col>
					    </Col>
					    <Col xs={8} md="auto" sm={8} className="bg-light mr-auto  mx-auto float-right" >
					    <Col size="2" md="auto" sm={4} className="bg-light mx-auto ml-auto" >
					    <Card style={{ width: '20rem', border: ' 2px solid black', height:'25rem',borderLeft: '2px solid black', borderRadius: '25px' }}>
								  <Card.Img variant="top" className="ml-3" src="holder.js/100px180?text=Image cap" />
								  <Card.Body>
								    <Card.Title>Job Title</Card.Title>
								    <Card.Text>
								      <h6> Company Name</h6>
								      Department,Location
								    <hr className="bg-dark"></hr>
								    </Card.Text>
								  </Card.Body>
								  <ListGroup className="list-group-flush">
						
								    <ListGroupItem>
								     <img src="mob2.png " width="25px"/> 12345
								      <img src="exp1.jpg " className="ml-5" width="40px"/> 7-10yrs

								    </ListGroupItem>
								    <ListGroupItem>
								    	 <img src="time.png " width="30px"/> full time
								    </ListGroupItem>
								    <ListGroupItem>
								    	<img src="avatar.png " width="30px"/>3 candidates
								    	<img src="salary.png " className="ml-4" width="30px"/>23-25 lkh
								    </ListGroupItem>
								  </ListGroup>
								  <Card.Body className="text-center">
								   <button type="button" className="btn bg-success text-light">Accept</button>
								    <button type="button" className="btn ml-5 bg-danger ">Reject</button>
								   
								  </Card.Body>
								</Card>
					    </Col>
					    </Col>
					    <Col xs={2} md="auto" sm={2} className="bg-light   float-right">

					    <Col xs={2} className="ml-5" style={{marginTop: '-100px'}}>
					    <br />
					    <br />
					    <br /><br /> <br /> <br /> <br /><br /><br /><br /><br /><br /><br />
					    <img src="sl6.png " className="bg-dark " width="35px"/>
					    </Col>
					    </Col>


					  </Row>
					   
					  </Container>

				</div>
			)
	}
}
export default Bodypart;
