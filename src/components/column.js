import React from 'react';

export default React.createClass({
  render() {
    let column_width = `col-md-${this.props.size}`;

    return (
      <div className={column_width}>
        {this.props.children}
      </div>
    )
  }
})