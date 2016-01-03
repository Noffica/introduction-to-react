import React from 'react';

import Column from './column';

export default React.createClass({
  getInitialState(){
    return {
      inputValue: ''
    }
  },

  handleChange(event) {
    const { value } = event.target.value;

    // this.props.onChange(value);
    // console.log(value);

    this.setState({
      inputValue: value
    });
  },

  handleClick() {
    console.log("clicky");
  },

  render() {
    const inputValue = this.state;

    return (
      <div className="form-group">
        <Column size={11}>
          <input
            className="form-control" 
            type="text"
            name="input"
            value={ inputValue }
            onChange={ this.handleChange }
          />
        </Column>

        <Column size={1}>
          <button
            className="btn btn-default"
            name="button"
            onClick={ this.handleClick }
          >
          Add
          </button>
        </Column>
      </div>
    )
  }
})
