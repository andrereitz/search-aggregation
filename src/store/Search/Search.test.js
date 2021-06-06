import { GoogleMock }  from '../../mocks';
import * as actions from './Search.actions';

const process = jest.fn(() => {
    return GoogleMock.results.results.organic.slice(0, 10)
})

describe('action/changeSearch', () => {
    it('should create an action to change service', () => {
        const payload = {
            title: 'Google',
            url: 'google.com'
        }
        const expectedAction = {
            type: 'CHANGE_SERVICE',
            payload
        }
        expect(actions.changeSearch(payload)).toEqual(expectedAction)
    })
})
describe('action/updateResults', () => {
    it('should create an action to update search results', () => {
        const payload = process();
        const expectedAction = {
            type: 'UPDATE_RESULTS',
            payload
        }
        expect(actions.updateResults(payload)).toEqual(expectedAction)
    })
})
describe('action/setLoading', () => {
    it('should create an action to change loading state', () => {
        const payload = true;
        const expectedAction = {
            type: 'SET_LOADING',
            payload
        }
        expect(actions.setLoading(payload)).toEqual(expectedAction)
    })
})