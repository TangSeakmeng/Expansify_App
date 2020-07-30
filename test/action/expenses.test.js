import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../src/actions/expenses';
import moment from 'moment';
import uuid from 'uuid';
import expenses from '../fixtures/arr';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../src/firebase/firebase';
import expenseReducer from '../../src/reducers/expenses';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123abc'
        }
     });
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        description: 'buying gaming laptop',
        amount: 1950,
        note: 'none',
        createdAt: moment()
    });

    expect(action).toEqual({ 
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'buying gaming laptop',
            amount: 1950,
            note: 'none',
            createdAt: moment()
        }
    });
})

test('should setup add expense action object with provided value', () => {
    const object = {
        description: 'buying gaming laptop',
        amount: 1950,
        note: 'none',
        createdAt: moment()
    };

    // const action = addExpense(object);
    const action = addExpense(expenses[0]);

    expect(action).toEqual({ 
        type: 'ADD_EXPENSE',
        expense: expenses[0]
     });
})

// test('should setup add expense action object with default value', () => {
//     const action = addExpense();

//     expect(action).toEqual({ 
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '', 
//             note: '', 
//             amount: 0, 
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     });
// })

test('should add expense with value to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'keyboard',
        amount: 50,
        note: 'The Gaming Keyboard',
        createdAt: 5000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with default to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should setup setExpenses action object with data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({ 
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should set Expenses', () => {
    const action = { 
        type: 'SET_EXPENSES',
        expenses: [expenses[2]]
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[2]]);
});


test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses(expenses)).then(() => {
        const actions = store.getActions();

        expenses.forEach((expense) => {
            expense.id= expense.id.toString()
        });

        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});
