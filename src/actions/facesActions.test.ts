import { loadFaces } from 'actions/facesActions';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { BASE_URL } from 'services/facesApi';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({})

describe('faceActions', () => {
  beforeAll(() => {
    store.clearActions();
  });
  afterEach(() => {
    fetchMock.restore();
  });
  
  it('should call REQUEST_FACES_LOADING', () => {
    loadFaces()(store.dispatch)
      .then(() => {
        return expect(store.getActions()[0]).toBe({ type: 'REQUEST_FACES_LOADING' })
      })
  });
  
  it('should call REQUEST_FACES_SUCCESS when api call is successful', () => {
    fetchMock.mock(BASE_URL + '/faces', 200);
    loadFaces()(store.dispatch)
      .then(() => {
        return expect(store.getActions()[1]).toBe({ type: 'REQUEST_FACES_SUCCESS', face: {} })
      })
  });
  
  it('should call REQUEST_FACES_ERROR when api call is failing', () => {
    fetchMock.mock(BASE_URL + '/faces', 500);
    loadFaces()(store.dispatch)
      .then(() => {
        return expect(store.getActions()[1]).toBe({ type: 'REQUEST_FACES_ERROR', value: '' })
      })
  });
  
});
