//@flow
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Form,  InputGroup, FormControl, Button, Panel, Thumbnail } from 'react-bootstrap';
import axios from "axios";

type Props = {
  searchText: string,
  result: Array<Object>,
  selectedUser: Object
};

class UserProfile extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedUser: props.selectedUser,
    };
  }
  componentWillReceiveProps(newProps: Props) {
    this.setState({ selectedUser: newProps.selectedUser});
  }

  render() {
    return (
      <div className="userProfile">
        {console.log("hitThis")}
      <Panel header="User">
          <ListGroup fill>
            {/* <ListGroupItem><Thumbnail href="#" alt="171x180" src={this.state.selectedUser.avatar_url} /></ListGroupItem> */}
            <ListGroupItem>Username: {this.state.selectedUser.login}</ListGroupItem>
            <ListGroupItem>Name: {this.state.selectedUser.name}</ListGroupItem>
          </ListGroup>
      </Panel>
      </div>
    )}
}

export class GithubViewer extends Component<Props>{
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: "",
      result: [],
      selectedUser: null
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
      return <ListGroupItem key={li.id} onClick={() => this.getSelectedUser(li)} > {li.login} </ListGroupItem>
    })
  }
  getSelectedUser = (user) => {
    if(user != null)
    {
      axios.get('https://api.github.com/users/' + user.login)
      .then(response => {
        this.setState({ selectedUser: response.data })
      })
      .catch(function (error) {
        console.log(error)
      })
    }
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
        <div className="col-lg-6">
          {this.state.selectedUser ? (<UserProfile selectedUser={this.state.selectedUser} />) : ("")}
        </div>
      </div>
    )}
}

export default GithubViewer;