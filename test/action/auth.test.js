import authReducer from '../../src/reducers/auth';
import {login, logout} from '../../src/actions/auth';

test('should generate login object', () => {
    const uid = 12345;
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
})

test('should generate logout object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
})
