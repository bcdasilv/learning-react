import React, { Component } from 'react';

class Table extends Component {
    render() {
    const { peopleData, removePerson } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody peopleData={peopleData} removePerson={removePerson}/>
      </table>
    );
  }
}

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    );
  }

const TableBody = props => {
    const rows = props.peopleData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td> 
                    <button onClick={() => props.removePerson(index)}>Delete</button>
                </td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

export default Table;