import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
    count: 1
})

// const incrementCount = () => {
//     return {

//     };
// };

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET': 
            return {
                count: 0
            };
        case 'SET': 
            return {
                count: action.count
            };
        default: 
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(decrementCount())
store.dispatch(resetCount())
store.dispatch(setCount({ count: 100 }))

// ---------------------------------------------------------------------

// const add = (data) => {
//     return data.a + data.b
// }

const add = ({a, b}) => {
    return a + b
}

console.log(add({a: 5, b: 10}))
