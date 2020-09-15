import React,{Component} from 'react'
import PropTypes from 'prop-types'


export default class AddTodo extends Component{

    state = {
        title:''
    }

    onType = (e) => this.setState({[e.target.name]:e.target.value});

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState(
            {
                title:''
            }
        )
    }
render(){
    return (
        <div>
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input 
                style={{flex:'10',padding:'10'}}
                type='text'
                name='title'
                placeholder='Add a task'
                value={this.state.title}
                onChange={this.onType}
                />
                <input
                style={{flex:'1'}}
                type='submit'
                value='ADD'
                />
            </form>
        </div>
    )
}
}


//Proptypes
AddTodo.propTypes = {
    addTodo:PropTypes.func.isRequired,
}