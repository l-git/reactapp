// 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo,delTodo,updTodo } from './actions/actions'

import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js';

import DelTodo from './components/DelTodo';

import UpdateTodo from './components/UpdateTodo';


class App1 extends Component {
   render() {
      const { dispatch, visibleTodos } = this.props

      return (
         <div>
            <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
            <DelTodo onDelClick={(id)=>dispatch(delTodo(id))}/>
            <UpdateTodo u={(num,text)=>dispatch(updTodo(num,text))} />
            <TodoList todos = {visibleTodos}/>
         </div>
      )
   }
}
function select(state) {
   return {
      visibleTodos: state.todos,
      s1:'i am s1'
   }
}


function mapDispatchToProps(){
    
    return {
        d1:'qq'
    }
}

export default connect(select)(App1);