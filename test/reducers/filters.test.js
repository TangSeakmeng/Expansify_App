import filterReducer from '../../src/reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})

test('should set sortby to amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set sortby to date', () => {
    const state = filterReducer({
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        filters: {
            text: 'bill'
        }
    };
    const state = filterReducer(undefined, action);
    expect(state.text).toBe('bill');
})

test('should set startDate', () => {
    const date = moment()
    const action = {
        type: 'SET_START_DATE',
        filters: {
            startDate: date
        }
    };
    const state = filterReducer(undefined, action);
    expect(state.startDate).toBe(date);
})

test('should set endDate', () => {
    const date = moment();
    const action = {
        type: 'SET_END_DATE',
        filters: {
            endDate: date
        }
    };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(date);
})