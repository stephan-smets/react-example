import React, { Component } from 'react'
import{ Button, Form,Col} from 'react-bootstrap'
import Modal from '../components/modal'

export default class registreren extends Component {
    constructor(props) {
        super(props)
        this.state = {
            team:'',
            voornaam1:'',
            voornaam2:'',
            achternaam1:'',
            achternaam2:'',
        }
      }

      changehandler= (e)=>{
          this.setState({[e.target.name]:e.target.value})
      }

    showModal=(e=true)=>{
        this.setState({showModal:e})
    }
    render() {
        return (
           
            <div className= "container">
                 <Modal show={this.state.showModal} close={()=>this.showModal(false)}
                 team = { this.state.team}
                 voornaam1= { this.state.voornaam1}
                 voornaam2= { this.state.voornaam2}
                 achternaam1 = { this.state.achternaam1}
                 achternaam2= { this.state.achternaam2}/>
                <Form>
                <Form.Row>
    <Form.Group as={Col}  sm="4" controlId="formGridEmail">
      <Form.Label>Teamnaam</Form.Label>
      <Form.Control type="text" 
                    name= "team"
                    value= {this.state.team}
                    onChange = {this.changehandler}
                    placeholder="vul uw teamnaam in..." />
    </Form.Group>
   
  </Form.Row>
  <h5>Speler 1</h5>

  <Form.Row>
    <Form.Group as={Col} xs="12" sm="6" controlId="formGridEmail">
      <Form.Label>Voornaam</Form.Label>
      <Form.Control type="text" 
                    name= "voornaam1"
                    value= {this.state.voornaam1}
                    onChange = {this.changehandler}
                    placeholder="vul uw voornaam in..." />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Achternaam</Form.Label>
      <Form.Control type="text" 
                    name= "achternaam1"
                    value= {this.state.achternaam1}
                    onChange = {this.changehandler}
                    placeholder="vul uw acternaam in..." />
    </Form.Group>
  </Form.Row>

  <h5>Speler 2</h5>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Voornaam</Form.Label>
      <Form.Control type="text" 
                    name= "voornaam2"
                    value= {this.state.voornaam2}
                    onChange = {this.changehandler}
                    placeholder="vul uw voornaam in..." />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Achternaam</Form.Label>
      <Form.Control type="text" 
                    name= "achternaam2"
                    value= {this.state.achternaam2}
                    onChange = {this.changehandler}
                    placeholder="vul uw acternaam in..." />
    </Form.Group>
  </Form.Row>


  <Button variant="primary" 
  onClick={()=>this.showModal()}>
    Registreer
  </Button>
</Form>
            </div>
        )
    }
}
