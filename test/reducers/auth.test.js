import authReducer from '../../src/reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 12345
    }

    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: 12345
    });
})

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT',
    }

    const state = authReducer({ uid: 12345 }, action);
    expect(state).toEqual({});
})