import { Action } from 'redux';
import { Face, getFaces } from 'services/facesApi';

export interface PayloadAction<T, V> extends Action<T> {
  value: V
}

export type FacesActions =
  Action<'REQUEST_FACES_LOADING'>
  | PayloadAction<'REQUEST_FACES_SUCCESS', Array<Face>>
  | PayloadAction<'REQUEST_FACES_ERROR', string>


export function loadFaces(): (dispatch: (action: FacesActions) => void) => Promise<void> {
  return async (dispatch: (action: FacesActions) => void) => {
    try {
      dispatch({ type: 'REQUEST_FACES_LOADING' });
      const result = await getFaces();
      dispatch({ type: 'REQUEST_FACES_SUCCESS', value: result });
    } catch (e) {
      dispatch({ type: 'REQUEST_FACES_ERROR', value: e });
    }
  }
}
