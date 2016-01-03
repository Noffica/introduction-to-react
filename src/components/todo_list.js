import React from 'react';

import Column from './column';

export default React.createClass({
  render() {
    let the_list = this.props.tasks.map((item, index) => {
      return (
        <li className="list-group-item" key={index}>{item}</li>
      )
    })

    return (
      <div>
        <ul className="list-group">
          { the_list }
        </ul>
      </div>
    )
  }
})
