import React, {Component} from 'react'
import{Modal, Button, Row, Col, Form } from 'react-bootstrap';

class Test extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{

  return (
  	<div>
    <Modal
  {...this.props}
					      size="lg"
					      aria-labelledby="contained-modal-title-vcenter"
					      centered
					    >
					      <Modal.Header closeButton>
					        <Modal.Title id="contained-modal-title-vcenter">
					         Job Title
					        </Modal.Title>
					      </Modal.Header>
					      <Modal.Body>
					        <div className="container">
					        Select Candidate
					        <select id="cars" style={{width: '300px', height: '40px',marginLeft: ' 6px'}}>
								  <option value="volvo">Satya prakash</option>
								  <option value="saab">Akash Shukla</option>
								  <option value="opel">Ujjwa Gautam</option>
								  <option value="audi">Jatin Bansal</option>
								</select>
								<button className="btn ml-5 bg-primary">Add </button>
					        </div>
					      </Modal.Body>
					      <Modal.Footer>
					        <Button className="btn bg-danger" onClick={this.props.onHide}>Close</Button>
					      </Modal.Footer>
					    </Modal>
					    </div>
					  );
					}
				}
					export default Test

				

