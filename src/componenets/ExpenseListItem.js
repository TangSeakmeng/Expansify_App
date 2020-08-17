import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <Link to={`/edit/${id}`} className="list-item">
        <div>
            <h3 className="list-item__title">{ description }</h3>
            <p className="list-item__subtitle">{ moment(createdAt).format('MMMM Do, YYYY') }</p>
        </div>
        <div>
            <h3 className="list-item__data">{ numeral(amount).format('$0,0.00') }</h3>
        </div>
    </Link>
);

{/* <button onClick={() => {
    props.dispatch(removeExpense({ id }))
}}>Remove</button> */}

export default ExpenseListItem;
