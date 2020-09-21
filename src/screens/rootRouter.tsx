import { loadFaces } from 'actions/facesActions';
import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'reducers/index';
import { LoadingStatus } from 'reducers/facesState';
import { bindActionCreators } from 'redux';
import RootScreen from 'screens/rootScreen';
import { Face } from 'services/facesApi';


interface StateToProps {
  faces: Array<Face>;
  loadingStatus: LoadingStatus
}

interface DispatchProps {
  loadFaces(): void;
}

type Props = StateToProps & DispatchProps;

function RootRouter(props: Props) {
  return (
    <RootScreen
      faces={props.faces}
      loadFaces={props.loadFaces}
      loadingStatus={props.loadingStatus}
    />
  )
}


export default connect(
  (state: AppState): StateToProps => ({
    faces: state.facesState.faces,
    loadingStatus: state.facesState.status
  }),
  (dispatch): DispatchProps => ({
    loadFaces: bindActionCreators(loadFaces, dispatch)
  }),
)(RootRouter)
