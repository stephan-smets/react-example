import React, { Component } from 'react'
import { Modal, Button} from "react-bootstrap"

export default class modal extends Component {  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  handleClose = ()=>{
      this.props.close()
  }

    render() {
        return (
            <Modal
        show={this.props.show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>uw registratie is gelukt!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         u hebt volgende gegevens geregistreerd:
         <ul>
             <li>{`team: ${this.props.team}`}</li>
             <li>{`voornaam1: ${this.props.voornaam1}`}</li>
             <li>{`achteraan1: ${this.props.achteraan1}`}</li>
             <li>{`voornaam2: ${this.props.voornaam2}`}</li>
             <li>{`achternaam2: ${this.props.achternaam2}`}</li>
         </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        )
    }
}
