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

        this.makeDeleteCall(people[index].id).then( response => {
          if (response === true) {
            this.setState({
              people: people.filter((person, i) => {
                return i !== index;
              }),
            })
          }
      });

        // this.setState({
        //   people: people.filter((person, i) => {
        //     return i !== index;
        //   }),
        // })
    }

    makeDeleteCall(id){
      console.log(`http://localhost:5000/users/`+id)
      return axios.delete(`http://localhost:5000/users/`+id)
      .then(res => {
        if (res.status === 204)
          return true
      })
      .catch(function (error) {
        //Not handling the error. Just logging in the console.
        console.log(error);
      }); 
    }

    makePostCall(person){
        return axios.post('http://localhost:5000/users', person)
        .then(function (response) {
          console.log(response);
          return response;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    handleSubmit = person => {
        this.makePostCall(person).then( response => {
            if (response.status === 201) {
                this.setState({ people: [...this.state.people, response.data] });
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