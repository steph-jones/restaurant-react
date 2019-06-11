import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu color={'teal'} inverted>
    <Link to="/">
      <Menu.Item
          // key={'teal'}
          // name={'teal'}
          // active={'teal'}
          // color={'teal'}
          >
        Home
      </Menu.Item>
    </Link>
    <Link to="/lunch">
      <Menu.Item>
        Lunch Menu
      </Menu.Item>
    </Link>
    <Link to="/dinner">
      <Menu.Item>
        Dinner Menu
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/contact">
      <Menu.Item>
        Contact Us
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar;