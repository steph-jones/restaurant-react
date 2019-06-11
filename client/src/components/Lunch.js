import React, { useState, useEffect, } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Card, Header, } from "semantic-ui-react";

const Lunch = (props) => {
    const [lunchFoods, setLunchFoods] = useState([]);

    useEffect( () => {
        // TODO make GET qith axios to get products 
        axios.get("/api/foods")
            .then( res => {
                // TODO update state
                setLunchFoods(res.data);

        });
    }, []); // this empty array gives it a component did mount so it wont be and endless loop??

    const renderLunchFoods = () => {
        if (lunchFoods.length <= 0)
            return <Header as="h2">No Foods</Header>
        return lunchFoods.map( food => (
          <Card key={food.id} color="pink">
            <Card.Content >
                <Card.Header>{food.name}</Card.Header>
                <Card.Meta>$ {food.price}</Card.Meta>
                <Card.Description>
                    {food.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button as={Link} to={`/foods/${food.id}`} color='pink'>
            View
            </Button>
            </Card.Content>
          </Card>
        ));
    };

    return ( 
        <div>
            <Header as="h1" color="blue">Lunch Foods</Header>
            <br />
            <Button as={Link} color=" inverted blue" to="/foods/new">
                Add Food
            </Button>
            <br />
            <br />
            <Card.Group>
                { renderLunchFoods() }
            </Card.Group>
        </div>
    );
};

export default Lunch