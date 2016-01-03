import React from 'react';

import TodoList from './todo_list';
 import TodoForm from './todo_form';
import Row      from './row';
import Column   from './column';


export default React.createClass({
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
          <TodoForm/>
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
