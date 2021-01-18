import React, { Component } from 'react'
import {Table,Button} from 'react-bootstrap'

export default class resultaten extends Component { constructor(props) {
    super(props)
    this.state = {
        NZ:[{team:"alpha",voornaam1:"jos",voornaam2:"dhont",achternaam1:"marie",achternaam2:"degroof",score: 200},
        {team:"bravo",voornaam1:"Dimitrie",voornaam2:"koens",achternaam1:"hans",achternaam2:"debruin",score: 180},
        {team:"charly",voornaam1:"lars",voornaam2:"hendricx",achternaam1:"jens",achternaam2:"vanden berg",score: 170},
        {team:"delta",voornaam1:"ann",voornaam2:"pippens",achternaam1:"marta",achternaam2:"huybrechts",score: 150},
        {team:"echo",voornaam1:"jonh",voornaam2:"van gent",achternaam1:"dorien",achternaam2:"mortier",score: 140},
        {team:"foxtrot",voornaam1:"els",voornaam2:"mechels",achternaam1:"aline",achternaam2:"van dijk",score: 100},
        {team:"golf",voornaam1:"rené",voornaam2:"dirks",achternaam1:"julie",achternaam2:"geens",score: 80},],

        OW:[{team:"alpha",voornaam1:"jos",voornaam2:"dhont",achternaam1:"marie",achternaam2:"degroof",score: 200},
        {team:"bravo",voornaam1:"Dimitrie",voornaam2:"koens",achternaam1:"hans",achternaam2:"debruin",score: 180},
        {team:"charly",voornaam1:"lars",voornaam2:"hendricx",achternaam1:"jens",achternaam2:"vanden berg",score: 170},
        {team:"delta",voornaam1:"ann",voornaam2:"pippens",achternaam1:"marta",achternaam2:"huybrechts",score: 150},
        {team:"echo",voornaam1:"jonh",voornaam2:"van gent",achternaam1:"dorien",achternaam2:"mortier",score: 140},
        {team:"foxtrot",voornaam1:"els",voornaam2:"mechels",achternaam1:"aline",achternaam2:"van dijk",score: 100},
        {team:"golf",voornaam1:"rené",voornaam2:"dirks",achternaam1:"julie",achternaam2:"geens",score: 80},],
        number:0,
    }
  }

    renderHeader = ()=>{
        return <thead>
        <tr>
          <th>#</th>
          <th>Team naam</th>
          <th>Voornaam</th>
          <th>Achternaam</th>
          <th>Score</th>
        </tr>
      </thead>

    }

    delete=(table,i)=>{
        this.state[table].splice(i,1)
        this.setState({})

    }

    // numberEnlarge = ()=>{
    //     this.setState({number:this.state.number+1})
    // }

    renderrow=(props)=>{
        console.log(props)
        let self =this
        return this.state[props.table].map(function(team,i){
            return <><tr key ={i}>
                    <td rowspan ="2">{i}</td>
                    <td rowspan ="2">{team.team}</td>
                    <td>{team.voornaam1}</td>
                    <td>{team.achternaam1}</td>
                    <td rowspan ="2">{team.score}</td>      
                    <td rowspan ="2"><Button variant= 'danger' onClick={()=>self.delete(props.table,i)}>Delete</Button></td>       
                </tr>
                <tr>
                <td>{team.voornaam2}</td>
                <td>{team.achternaam2}</td>
            </tr></>
        })

    }
    render() {
        return (
            <div style={{position:'relative'}} className='container'>
                {/* <div style={{position:'absolute',right:'0px'}}> */}
                <div >
                <Button variant="success"
                        // onClick={()=>this.numberEnlarge()}
                        >{`PDF Genereren ${this.state.number}`}</Button>
                        </div>
            <h2>Team Noord-Zuid </h2>
            <Table striped bordered hover size="sm">
                <this.renderHeader />
                <tbody><this.renderrow table='NZ'/></tbody>
</Table>

<h2>Team Oost-West </h2>
            <Table striped bordered hover size="sm">
                <this.renderHeader/>
                <tbody><this.renderrow table='OW'/></tbody>
</Table>
</div>
        )
    }
}
