import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import axios from 'axios';

class MyFirstApp extends Component {
    state = {
        people : [],
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/users`)
          .then(res => {
            const people = res.data.users_list;
            this.setState({ people });
          })
          .catch(function (error) {
            //Not handling the error. Just logging in the console.
            console.log(error);
          });
      }

    removePerson = index => {
        const { people } = this.state

        this.setState({
          people: people.filter((person, i) => {
            return i !== index;
          }),
        })
    }

    makePostCall(person){
        return axios.post('http://localhost:5000/users', person)
        .then(function (response) {
          console.log(response);
          return (response.status === 201);
        })
        .catch(function (error) {
          console.log(error);
          return false;
        });
    }

    handleSubmit = person => {
        this.makePostCall(person).then( callResult => {
            if (callResult === true) {
                this.setState({ people: [...this.state.people, person] });
            }
        });
    }

    render() {
        const {people} = this.state;

        return (
        <div className="container">
            <Table peopleData={people} removePerson={this.removePerson} />
            <Form handleSubmit={this.handleSubmit}/>
        </div>
        )
    }
  }

  export default MyFirstApp;