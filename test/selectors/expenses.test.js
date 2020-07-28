import selectExpenses from '../../src/selectors/expenses';
import moment from 'moment';

const expenses = [
    { 
        id: '1',
        description: 'Water Bill', 
        amount: 123.5, 
        note: '',
        createdAt: 0
    },
    { 
        id: '2',
        description: 'Gas Bill', 
        amount: 3.5, 
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    { 
        id: '3',
        description: 'Rent', 
        amount: 3123.5, 
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

test('should filter by textValue', () => {
    const filters = {
        text: 'bill',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ]);
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0] ]);
})

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ]);
})

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
})

test('should sort by amout', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
})