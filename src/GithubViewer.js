//@flow
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Form,  InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from "axios";

type Props = {
  searchText: string,
  result: Array<Object>,
  currentUser: Object
};

export class GithubViewer extends Component<Props>{
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: "",
      result: [],
      currentUser: null
    };
  }
  getUsers = () => {
    axios.get('https://api.github.com/search/users', {
      params: {
        q: this.state.searchText
      }
    }).then(response => 
    {
      this.setState({ result: response.data.items })
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  getUserList = () => {
    return this.state.result.map((li) => {
      return <ListGroupItem key={li.id} onClick={() => {this.setState({currentUser: li}) }} > {li.login} </ListGroupItem>
    })
  }
  render() {
    return (
      <div className="row subheading">
        <div className="col-lg-6">
          <Form>
            <InputGroup className="userSearch">
              <FormControl placeholder="Search User" onChange={event => { this.setState({ searchText: event.target.value }) }} />
              <InputGroup.Button>
                <Button onClick={this.getUsers} disabled={this.state != null && this.state.searchText.length === 0}>Search</Button>
              </InputGroup.Button>
            </InputGroup>
          </Form>
          <div className="userResults">
            <h3>Results</h3>
            <ListGroup>{this.state.result.length > 0 ? this.getUserList() : ''}</ListGroup>
          </div>
        </div>
      </div>
    )}
}

export default GithubViewer;