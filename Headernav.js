import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './Headernav.css';
import { FormControl } from 'react-bootstrap';
import { Navbar,Row,Col,ButtonToolbar} from 'react-bootstrap';
import Test from './Test';

class Headernav extends Component
{
	constructor(props)
{
	super(props);
	this.state={
		addmodelshow:false
	}
}

render()
{

		const{deps}=this.state;
		let addmodelclose =()=>this.setState({addmodelshow:false})
		return(
			<div className="bg-light" style={{border: ' 2px solid grey'}}>
					<Row bg="dark">

					 <Col xs={5}>
					 <Navbar bg="light" expand="lg">
					 <ButtonToolbar>
					    	<Button variant="secondary" onClick={()=> this.setState({addmodelshow:true})}>
					    	Add Candidates</Button>

					    	<Test show={this.state.addmodelshow} onHide={addmodelclose} />

					    </ButtonToolbar>
					  <img src="m.png " className="ml-3 " width="30px"/>
					   
					  
					  
					</Navbar>
					</Col>
					<Col xs={4} className="bg-light">
					</Col>

					<Col xs={3} bg="light">
					 
					  <Navbar bg="light" expand="lg">
					  <Navbar.Collapse id="basic-navbar-nav"> 
					 	<img src="mbox2.png " className="my-auto mt-auto" width="45px" height="35p" style={{borderRadius:'50px'}}/>
					 	 <img src="group.png "  className=" ml-3 my-auto mt-auto" width="45px" height="30px" style={{borderRadius:'20px'}}/>
					 	 <vh />
					 	 <img src="avt2.png " className=" ml-3 my-auto mt-auto" width="45px" height="35p" style={{borderRadius:'50px'}}/>
					      
					      <NavDropdown   title="User Name" id="basic-nav-dropdown">

					        <NavDropdown.Item href="#action/3.1">user1</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">2user</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.3">user3</NavDropdown.Item>
					        <NavDropdown.Divider />
					        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					      </NavDropdown>
					        </Navbar.Collapse>
					  <Navbar.Toggle aria-controls="basic-navbar-nav" />
					  
					
					</Navbar>
					    </Col>
					</Row>
			</div>


			)
}

}
export default Headernav;
