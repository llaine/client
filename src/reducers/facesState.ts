import { FacesActions } from 'actions/facesActions';
import { Face } from 'services/facesApi';


export type LoadingStatus = 'loading' | 'error' | 'default' | 'success';

export interface FacesState {
  faces: Array<Face>;
  status: LoadingStatus;
}

const defaultState: FacesState = {
  faces: [],
  status: 'default',
}

export default function facesState(state: FacesState = defaultState, action: FacesActions): FacesState {
  switch (action.type) {
    case 'REQUEST_FACES_LOADING':
      return {
        ...state,
        status: 'loading'
      }
    case 'REQUEST_FACES_SUCCESS':
      return {
        ...state,
        faces: action.value,
        status: 'success'
      }
    case 'REQUEST_FACES_ERROR':
      return {
        ...state,
        status: 'error'
      }
    default:
      return state;
  }
}
