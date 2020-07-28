import expenseReducer from '../../src/reducers/expenses';
import { addExpense, editExpense, removeExpense } from '../../src/actions/filters';
import expenses from '../fixtures/arr';

test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: 2
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
})

test('should remove expense by id if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: 5
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ]);
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 4,
            description: 'Internet Bill', 
            amount: 50, 
            note: 'Wifi Server',
            createdAt: 0
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ ...expenses, {
        id: 4,
        description: 'Internet Bill', 
        amount: 50, 
        note: 'Wifi Server',
        createdAt: 0
    }]);
});

test('should edit an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        id: 4,
        expense: {
            description: 'Internet Bill Updated', 
            amount: 50, 
            note: 'Wifi Server Updated',
            createdAt: 0
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[1], expenses[2], {
        description: 'Internet Bill Updated', 
        amount: 50, 
        note: 'Wifi Server Updated',
        createdAt: 0
    }]);
})

test('should edit an expense if id is not exist', () => {
    const action = {
        type: 'ADD_EXPENSE',
        id: 56,
        expense: {
            description: 'Internet Bill Updated', 
            amount: 50, 
            note: 'Wifi Server Updated',
            createdAt: 0
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[1], expenses[2], {
        description: 'Internet Bill Updated', 
        amount: 50, 
        note: 'Wifi Server Updated',
        createdAt: 0
    }]);
})