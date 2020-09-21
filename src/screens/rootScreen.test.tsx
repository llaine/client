import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import RootScreen, { RootScreenProps } from 'screens/rootScreen';


const setup = (setupProps: Partial<RootScreenProps> = {}) => {
  const defaultProps: RootScreenProps = {
    faces: [],
    loadFaces: jest.fn(),
    loadingStatus: 'default',
  }
  const props = { ...defaultProps, ...setupProps };
  const wrapper = render(<RootScreen {...props} />);
  
  return {
    props,
    wrapper,
  }
}

describe('RootScreen', () => {
  it('should call the loadFaces method on render and display a loading status', () => {
    const { props } = setup();
    expect(props.loadFaces).toHaveBeenCalled();
  });
  
  it('should display an activity indicator on load', async () => {
    const { wrapper } = setup({ loadingStatus: 'loading' });
    const result = await wrapper.findAllByTestId('activityIndicator');
    expect(result.length).toBe(1);
  })
  
  it('should display an error message when the status failed', async () => {
    const { wrapper, props } = setup({ loadingStatus: 'error', loadFaces: jest.fn() });
    const text = await wrapper.findByText('Something went wrong');
    fireEvent.press(wrapper.getByText('Try Again'));
    
    expect(props.loadFaces).toHaveBeenCalled();
    expect(text).toBeTruthy()
  });
  
  it('should display the FaceList Component if the status is success', async () => {
    const { wrapper } = setup({ loadingStatus: 'success', faces: [] });
    // The Header of the component is a Text
    const items = await wrapper.findAllByText('Faces');
    expect(items.length).toBe(1);
  })
})
