// import moment from 'moment';
const moment = jest.requireActual('moment');

export default (timeStamp = 0) => {
    return moment(timeStamp);
};