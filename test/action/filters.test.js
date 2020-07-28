import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../src/actions/filters';

test('should generate set startDate action object ', () => {
    const action = setStartDate({ startDate: moment(0) });
    expect(action).toEqual({
        type: 'SET_START_DATE',
        filters: {
            startDate: moment(0)
        }
    });
});

test('should generate set endDate action object ', () => {
    const action = setEndDate({ endDate: moment(0) })
    expect(action).toEqual({
        type: 'SET_END_DATE',
        filters: {
            endDate: moment(0)
        }
    })
})

test('should generate set textFilter action object', () => {
    const action = setTextFilter({ text: 'abc' })
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filters: {
            text: 'abc'
        }
    })
});

test('should generate set textFilter with default value action object', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filters: {
            text: undefined
        }
    })
});

test('should generate set sortByDate action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should generate set sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})