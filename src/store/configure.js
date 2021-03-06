import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        composeEnchancers(applyMiddleware(thunk))
    );

    return store;
}
