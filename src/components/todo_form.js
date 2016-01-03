import React from 'react';

import Column from './column';

export default React.createClass({
  render() {
    return (
      <div className="form-group">
        <Column size={11}>
          <input className="form-control" type="text" name="input"/>
        </Column>

        <Column size={1}>
          <button className="btn btn-default" name="button">Add</button>
        </Column>
      </div>
    )
  }
})
