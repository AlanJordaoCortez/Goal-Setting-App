import React from 'react';
import './styles.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props); //understand wtf this does
        this.state = {
            goal: '',
            event: '',
            goalAdded: false,
            eventAdded: false
        };

        //this bind the obj method with the object this, so it doesn't get lost with the callback.
        this.handleChange = this.handleChange.bind(this);
        this.createGoal = this.createGoal.bind(this);
        this.createEvent = this.createEvent.bind(this);
        this.validInput = this.validInput.bind(this);
        
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    //checks if input is valid before creating goal/event
    validInput = userInput =>  {
        console.log('input: ' + userInput);
        if(userInput.length >= 5) {
            return true;
        } else {
            return false;
        }
    }

    createGoal = e => {
        //is an async call in React. So you won't likely get the updated state value in the next line.
        //To check the updated value on successful state update, you could check in the callback handler.
        // this.setState({goalAdded: this.validInput(this.state.goal)}, () => {
        //     console.log(this.state.goalAdded);
        // });

        this.setState({goalAdded: this.validInput(this.state.goal)}); //this set state based on the returned value of valid input
        e.preventDefault();

    }

    createEvent = e => {
        this.setState({eventAdded: this.validInput(this.state.event)}); //this set state based on the returned value of valid input
        e.preventDefault();
    }

    //MyGoals component
    myGoals(props) {
        let goalAdded = props.goalAdded;
        let newGoal = props.goal;
        if(goalAdded) {
            return(
                <div className="goals-list">
                    <h2>My Goals</h2>
                    <ul>
                        <li>{newGoal}</li>
                    </ul>

                </div>       
            );
        } else {
            return null;
        }
    }

    //MyEvents Component
    myEvents(props) {
        let eventAdded = props.eventAdded;
        let newEvent = props.event;
        if(eventAdded) {
            return(
                <div className="events-list">
                    <h2>My Events</h2>
                    <ul>
                        <li>{newEvent}</li>
                    </ul>

                </div>
            );
        } else {
            return null;
        } 
    }

    render() {
        return(
            <div className="todo">
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
                <div className="schedule">

                    < this.myGoals goalAdded={this.state.goalAdded} goal={this.state.goal}/>
                    < this.myEvents  eventAdded={this.state.eventAdded} event={this.state.event}/>

                </div>
            </div>
        );
    };
};

export default TodoList;