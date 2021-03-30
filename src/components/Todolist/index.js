import React from 'react';
import './styles.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props); //understand wtf this does
        this.state = {
            goal: '',
            event: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.createGoal = this.createGoal.bind(this);
        this.createEvent = this.createEvent.bind(this);
      }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }
    createGoal = e => {
        e.preventDefault();
        alert(this.state.goal);
    }

    createEvent = e => {
        e.preventDefault();
        alert(this.state.event);
    }

    render() {
        return(
            <div className="todo-list">
                <form>
                    <label for="goal">Add a goal</label>
                    <input type="text" id="goal" name="goal" value={this.state.value} onChange={this.handleChange}></input>
                    <button id="add-goal" onClick={this.createGoal}>Add!</button>
                    <br></br>
                    <label for="event">Add an activity for you schedule</label>
                    <input type="text" id="event" name="event" value={this.state.value} onChange={this.handleChange} ></input>
                    <button id="add-event" onClick={this.createEvent}>Add!</button>
                </form>
            </div>
        );
    };
};

export default TodoList;