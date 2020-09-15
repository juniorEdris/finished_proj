import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './components/pages/About'
import Todos from './components/Todos'
import Header from './header/Header'
import AddTodo from './components/addtodo/AddTodo'
import axios from 'axios'


import './App.css';

class App extends Component {
  state = {
    todos:[]
  }

  componentDidMount(){//its a reserved word
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res=> this.setState({
        todos:res.data
      }))
  }

  markComplete = (id) =>{
      this.setState({ todos:this.state.todos.map(todo=>{
            if(todo.id === id){
              todo.completed = !todo.completed
            }
            return todo
        })
     })
  }

  deleteList = (id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res=>    this.setState({
        todos: [...this.state.todos.filter(todo =>{
          return  todo.id !== id
        })]
      })    )
  }

  addTodo = (title) => {
    // const newTodo =      {
    //   id:Math.random(),
    //   title,
    //   completed:false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed:false
    })
    .then(res=>this.setState({
      todos:[...this.state.todos,res.data]
    }))
    
  }


  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' render={props=>(
            <React.Fragment>
             <AddTodo addTodo={this.addTodo}/>
          <Todos 
          todos={this.state.todos} 
          markComplete = {this.markComplete}
          deleteList = {this.deleteList}
          /> 
            </React.Fragment>
          )} />

          <Route path='/about' component={About}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
