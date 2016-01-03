import React from 'react';

import TodoList from './todo_list';
 import TodoForm from './todo_form';
import Row      from './row';
import Column   from './column';

export default React.createClass({
  handleInputChange(value) {
    console.log(value);

    this.setState({
      inputValue: value
    });
  },

  render() {
    let name = this.props.name;

    let list_of_tasks = [
      'Clean Room',
      'Buy Milk',
      'Pay Phone Bill'
    ];

    return (
      <div className="container">
        <h1>{ name }</h1>

        <Row>
          <TodoForm
            value={ inputValue }
            onChange={ this.handleInputChange }
            onClick={ this.handleOnClick }
          />
        </Row>

        <Row>
          <Column size={12}>
            <TodoList tasks={ list_of_tasks }/>
          </Column>
        </Row>
      </div>
    );
  }
});
