import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const date = new Date();
const now = moment().format('MMM Do, YYYY');

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : 0,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    

    // state = {
    //     description: '',
    //     note: '',
    //     amount: 0,
    //     createdAt: moment(),
    //     calendarFocused: false,
    //     error: ''
    // };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description } ));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({ forcused }) => {
        this.setState((prevState) => ({ calendarFocused: !prevState.calendarFocused }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Invalid Input!' }))

        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                // amount: parseFloat(this.state.amount, 10) * 100, 
                amount: parseFloat(this.state.amount, 10), 
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input type="text" placeholder="description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} className="text-input" />
                <input type="number" placeholder="amount" autoFocus value={this.state.amount} onChange={this.onAmountChange} className="text-input" />
                <SingleDatePicker 
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange} 
                    focused={this.state.calendarFocused} 
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1} 
                    isOutsideRange={() => false}
                />
                <textarea placeholder="add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange} className="textarea"></textarea>
                <div>
                    <button className="button">{ this.props.buttonTitle }</button>
                </div>
            </form>
        );
    };
};