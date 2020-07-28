import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses';
import moment from 'moment';
import uuid from 'uuid';

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

    const action = addExpense(object);

    expect(action).toEqual({ 
        type: 'ADD_EXPENSE',
        expense: {
            ...object,
            id: expect.any(String)
        }
     });
})

test('should setup add expense action object with default value', () => {
    const action = addExpense();

    expect(action).toEqual({ 
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
     });
})