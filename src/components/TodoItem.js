import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodoItem extends Component {
    getStyles = () =>{
        return{
            backgroundColor:'#f4f4f4',
            textDecoration:this.props.todo.completed ? 'line-through':'none',
            borderBottom:'1px solid #ccc'
        }
    }

    render() {

        const { id, title } = this.props.todo
        return (
            <div style={this.getStyles()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteList.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}
//Proptypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    deleteList:PropTypes.func.isRequired
}

const btnStyle = {
    color:'#ff0000',
    // background:'',
    border:'none',
    padding:'5px 10px',
    // borderRadius:'50%',
    cursor:'pointer',
    float:'right',
    fonSize:'5px',
    lineHeight:'0.4'

}

export default TodoItem
