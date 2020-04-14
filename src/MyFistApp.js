import React, { Component } from 'react';
import Table from './Table';

class MyFirstApp extends Component {
    state = {
        people : [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
            ],
    }

    removePerson = index => {
        const { people } = this.state
      
        this.setState({
          people: people.filter((person, i) => {
            return i !== index;
          }),
        })
      }

    render() {
        const {people} = this.state;

        return (
        <div className="container">
            <Table peopleData={people} removePerson={this.removePerson} />
        </div>
        )
    }
  }

  export default MyFirstApp;