import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid'

const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({ 
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
})

const editExpense = (id, updates) => ({ 
    type: 'EDIT_EXPENSE',
    id, 
    updates
})

const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': {
            // return state.concat(action.expense)
            return [
                ...state, 
                action.expense
            ];
        }
        case 'REMOVE_EXPENSE': {
            return state.filter((expense) => {
                return expense.id !== action.expense.id
            });
        }
        case 'EDIT_EXPENSE': {
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        }
        default:
            return state
    }
};

const setTextFilter = ({text}) => ({ 
    type: 'SET_TEXT_FILTER',
    filters: {
        text
    }
})

const sortByAmount = () => ({ 
    type: 'SORT_BY_AMOUNT',
})

const sortByDate = () => ({ 
    type: 'SORT_BY_DATE',
})

const setStartDate = ({ startDate } = {}) => ({
    type: 'SET_START_DATE',
    filters: {
        startDate
    }
})

const setEndDate = ({ endDate } = {}) => ({
    type: 'SET_END_DATE',
    filters: {
        endDate
    }
})

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER': {
            return {
                ...state, 
                text: action.filters.text
            }
        }
        case 'SORT_BY_AMOUNT': {
            return {
                ...state, 
                sortBy: 'amount'
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...state, 
                sortBy: 'date'
            }
        }
        case 'SET_START_DATE': {
            return {
                ...state, 
                startDate: action.filters.startDate
            }
        }
        case 'SET_END_DATE': {
            return {
                ...state, 
                endDate: action.filters.endDate
            }
        }
        default:
            return state
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date')
            return a.createdAt < b.createdAt ? 1 : -1
        else 
            return a.amount < b.amount ? 1 : -1
    })
} 

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)

    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({description: 'rent', note: 'none', amount: 1000, createdAt: 25000}))
const expenseTwo = store.dispatch(addExpense({description: 'dinner', note: 'none', amount: 500, createdAt: 212000}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'buying gaming laptop', amount: 5000 }))

// store.dispatch(setTextFilter({ text: 'dinner' }));
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate({ startDate: 25 }))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate({ endDate: 25001 }))
