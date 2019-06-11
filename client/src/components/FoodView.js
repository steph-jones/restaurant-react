import React from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";

class FoodReview extends React.Component {
  state = { food: {}, };

  componentDidMount() {
    axios.get(`/api/foods/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ food: res.data, });
      })
  }

  render() {
    const { name, description, price, category } = this.state.food;

    return (
      <div>
        <Segment raised inverted color='pink' tertiary>
          <Header as="h1" color='white'>{ name }</Header>
        </Segment>
        <Segment  vertical>
          <Header as="h3" color="pink">{ category }</Header>
          <Header as="h5" color="grey">${ price }</Header>
          <p>{ description }</p>
        </Segment>
        <br />
        <br />
        <Button 
          color="inverted blue" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}

export default FoodReview;