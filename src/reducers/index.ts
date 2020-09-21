import facesState, { FacesState } from 'reducers/facesState';
import { combineReducers } from 'redux';


export interface AppState {
  facesState: FacesState
}

export default combineReducers<AppState>({
  facesState,
})
