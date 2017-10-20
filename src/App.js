// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import glamorous from 'glamorous';
import GithubViewer from './GithubViewer';

const JumboHead = glamorous.h1(
  {
  fontSize: 5.0,
  fontWeight: 100,
  lineHeight: 1.1,
  });

type Props = {

};

export class Home extends Component<Props> {
  render() {
    return (
      <div>
        <Jumbotron Header="Jumbotron Heading" SubText="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus." />
        <SubHeading/>
        <SubHeading/>
        <SubHeading/>
      </div>
    );
  }
}

export class AboutUs extends Component<Props> {
  render() {
    return (
      <div>
        <Jumbotron Header="About Us" SubText="Info about us" />
      </div>
    );
  }
}

export class ContactUs extends Component<Props> {
  render() {
    return (
      <div>
        <Jumbotron  Header="Contact Us" SubText="Contact Info"/>
      </div>
    );
  }
}

type JumboProps = {
  Header: string,
  SubText: string
}

export class Jumbotron extends Component<JumboProps> {
  render() {
    return (

      <div className="jumbotron">
        <JumboHead className="jumboHead"> {this.props.Header} </JumboHead>
        <p> {this.props.SubText} </p>
        <span> <Button className="btn-lg" bsStyle="success">Sign up today</Button> </span>
      </div>

    );
  }
}

export class SubHeading extends Component<Props> {
  render() {
    return (

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

    );
  }
}

export class GithubSearch extends Component<Props>{
  render(){
    return <GithubViewer/>
  }
}

export class Header extends Component<Props> {
  render() {
    return (
      <Router>
        <div className="page-header clearfix">
          <Nav className="pull-right" bsStyle="pills" activeKey={1}>
            <NavItem eventKey={1} href="/Home" >Home</NavItem>
            <NavItem eventKey={2} href="/About" >About</NavItem>
            <NavItem eventKey={3} href="/Contact" >Contact</NavItem>
            <NavItem eventKey={4} href="/GitHubViewer" >GitHub Viewer</NavItem>
          </Nav>
          <h3 className="text-muted"> Project Name </h3>

          <Route exact path="/Home" component={Home} />
          <Route path="/About" component={AboutUs} />
          <Route path="/Contact" component={ContactUs} />
          <Route path="/GitHubViewer" component={GithubSearch} />
        </div>

      </Router>
    );
  }
}
