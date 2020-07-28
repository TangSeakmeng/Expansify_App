import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{ description }</h3>
        </Link>
        <p>{ amount } - { moment(createdAt).format('MM-DD-YYYY') }</p>
        
        {/* <button onClick={() => {
            props.dispatch(removeExpense({ id }))
        }}>Remove</button> */}
    </div>
);

export default ExpenseListItem;
