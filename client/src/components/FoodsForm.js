import React from 'react';
import axios from "axios";
import { Form, Header, Segment, Message } from "semantic-ui-react";

class FoodsForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", category: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const product = { ...this.state, };
    axios.post("/api/products", product)
      .then( res => {
        this.props.history.push("/products");
      })
      this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, price, description, category, } = this.state;

    return (
      <div>
        <Header as="h1" color="green">Doesn't work yet</Header>
        <Segment inverted color="green" tertiary>
        <Form onSubmit={this.handleSubmit} inverted >
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="category"
              name="category"
              placeholder="category"
              value={category}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              type="number"
              value={price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="inverted white">Submit</Form.Button>
          {/* <Message success header='Form Completed' content="Product successfully added" /> */}
        </Form>
        </Segment>
      </div>
    )
  }
}

export default FoodsForm;
