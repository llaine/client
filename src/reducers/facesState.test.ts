import { FacesActions } from 'actions/facesActions';
import facesState, { FacesState } from 'reducers/facesState';

describe('facesState', () => {
  const defaultState: FacesState = {
    faces: [],
    status: 'default',
  };
  
  it('should return an initial state', () => {
    expect(facesState(undefined as unknown as FacesState, {} as FacesActions)).toEqual(defaultState);
  });
  
  it('should change the status when getting REQUEST_FACES_LOADING', () => {
    expect(facesState(defaultState, { type: 'REQUEST_FACES_LOADING' }))
      .toEqual({
        ...defaultState,
        status: 'loading'
      })
  })
  
  it('should change the status and populating the faces array on REQUEST_FACES_SUCCESS', () => {
    const faces = [{ id: 1, name: '', avatar: '' }];
    expect(facesState(defaultState, { type: 'REQUEST_FACES_SUCCESS', value: faces }))
      .toEqual({
        ...defaultState,
        status: 'success',
        faces,
      })
  });
  
  it('should change the status on REQUEST_FACES_FAILURE', () => {
    expect(facesState(defaultState, { type: 'REQUEST_FACES_ERROR', value: '' }))
      .toEqual({
        ...defaultState,
        status: 'error',
      })
  });
})
