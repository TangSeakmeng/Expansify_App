import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{ description }</h3>
        </Link>
        <p>{ numeral(amount).format('$0,0.00') } - { moment(createdAt).format('MMMM Do, YYYY') }</p>
        
        {/* <button onClick={() => {
            props.dispatch(removeExpense({ id }))
        }}>Remove</button> */}
    </div>
);

export default ExpenseListItem;
