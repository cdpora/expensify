import {login, logout} from '../../actions/auth';

test('should generate login actions object', () => {
    const uid = 'abc123'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should generate logout actions object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})