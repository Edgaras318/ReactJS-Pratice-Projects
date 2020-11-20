import React, { useState } from 'react'

export default function AppTodo(props) {
    const [state, setState] =  useState({
        content: ''
    });
   const handleChange = e => {
    setState({
            content: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.addTodos(state);
        setState({
            content: ''
        });
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" onChange={handleChange} value={state.content}/>
            </form>
        </div>
      );
}