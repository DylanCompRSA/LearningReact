import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { ReactDOM } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="page-header">

          {/* <ButtonToolbar className="float-right">
            <Button bsStyle="primary">Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </ButtonToolbar> */}

          <Nav className="pull-right" bsStyle="pills" activeKey={1}>
            <NavItem eventKey={1} >Home</NavItem>
            <NavItem eventKey={2} >About</NavItem>
            <NavItem eventKey={3} >Contact</NavItem>
          </Nav>
          <h3 className="text-muted"> Project Name </h3>

        </div>

        <div className="jumbotron">
          <h1 className="display-3"> Jumbotron heading </h1>
          <p> Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>
          <p> <Button className="btn-lg" bsStyle="success">Sign up today</Button> </p>
        </div>

        <div className="row subheading">
          <div className="col-lg-12">
            <div className="col-lg-6">
              <h4> Subheading </h4>
              <p> Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. </p>
            </div>
            <div className="col-lg-6">
              <h4> Subheading </h4>
              <p> Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
