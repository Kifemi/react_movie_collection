import React, { Component } from 'react';

import '../../styles/Summary.css';

export class SummaryContainer extends Component {
  IsInCollection = (owned) => {
    if(owned == 1) {
      return "Yes";
    } else{
      return "No";
    }
  }

  GetTableElements = () => this.props.movieCollection.map(element => {
    return (
      <tr>
        <td className='name'>{element.name}</td>
        <td>{element.price}</td>
        <td>{element.yearPublished}</td>
        <td>{element.director}</td>
        <td>{this.IsInCollection(element.owned)}</td>
      </tr>
    )
  })


  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <table className='table table-bordered table-hover tableStyle'>
            <thead>
              <tr className='tableHeadRow'>
                <th>Title</th>
                <th>Price</th>
                <th>Relese</th>
                <th>Director</th>
                <th>Owned</th>
              </tr>
            </thead>
            <tbody>
              {this.GetTableElements()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default SummaryContainer
