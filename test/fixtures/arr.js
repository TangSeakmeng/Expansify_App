import moment from 'moment';

export default [
    { 
        id: 1,
        description: 'Water Bill', 
        amount: 195, 
        note: '',
        createdAt: 0
    },
    { 
        id: 2,
        description: 'Gas Bill', 
        amount: 109500, 
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    { 
        id: 3,
        description: 'Rent', 
        amount: 4500, 
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];