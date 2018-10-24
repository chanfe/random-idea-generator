import React, { Component } from 'react';
import Title from '../components/renters_components/Title';
import Photo from '../components/renters_components/Photo';
import Description from '../components/renters_components/Description';
import Pricings from '../components/renters_components/Pricings';
import Place from '../components/renters_components/Place';

import { Button, Segment, Container } from 'semantic-ui-react'



class HostListPage extends Component {
  constructor() {
    super()
    this.state ={
      title:"",
      photo:"",
      description:"",
      price:0,
      place:"",
    }
  }

  changeTitle = (title) =>{
    this.setState({
      title:title.target.value
    })
  }

  onDrop = (file) =>{
  }

  changePhoto = (photo) =>{
    console.log(photo.target.value)
    this.setState({
      photo:photo.target.value
    })
  }

  changeDescription = (description) =>{
    this.setState({
      description:description.target.value
    })
  }

  changePrice = (price) =>{
    this.setState({
      price:price.target.value
    })
  }

  changePlace = (place) =>{
    this.setState({
      place:place.target.value
    })
  }

  handleFetch = () =>{
    console.log(this.state)
    fetch(`http://localhost:3000/items`, {
      method: "POST",
      headers: {
            "Content-Type": "application/json",
        },
      body: JSON.stringify({
        "host_id": this.props.user.id,
        "name":this.state.title,
        "image_url":this.state.photo,
        "discription":this.state.description,
        "cost":this.state.price
      }),
    }).then(res => res.json()).then(this.props.history.push('/Host'))


  }

  render(){
    return (
      <Container>
        <Segment>
          <h1>Listing Page</h1>
          <div className="ui divider"></div>
          <Title changeTitle={this.changeTitle}/>
        </Segment>
        <Segment>
          <Photo changePhoto={this.changePhoto} photo={this.state.photo} onDrop={this.onDrop}/>
        </Segment>
        <Segment>
          <Description changeDescription={this.changeDescription}/>
        </Segment>
        <Segment>
          <Pricings changePrice={this.changePrice}/>
        </Segment>
        <Segment>
          <Place changePlace={this.changePlace}/>
        </Segment>
        <Segment>
          <Button floated='right' primary onClick={this.handleFetch} >List it</Button>
          <br />
          <br />
        </Segment>
      </Container>
    )
  }
}

export default HostListPage
