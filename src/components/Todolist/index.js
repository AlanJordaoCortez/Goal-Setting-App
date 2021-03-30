import React from 'react';
import './styles.css';

class TodoList extends React.Component {

    render() {
        return(
            <div className="todo-list">
                <form>
                    <label for="goal">Add a goal</label>
                    <input type="text" id="goal" name="goal"></input>
                    <button id="add-goal">Add!</button>
                    <br></br>
                    <label for="event">Add an activity for you schedule</label>
                    <input type="text" id="event" name="goal"></input>
                    <button id="add-event">Add!</button>
                </form>
            </div>
        );
    };
};

export default TodoList;