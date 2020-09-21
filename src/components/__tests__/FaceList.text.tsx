import { render } from '@testing-library/react-native';
import FaceList, { FaceListProps } from 'components/FaceList';
import React from 'react';

const setup = (props: FaceListProps) => {
  const wrapper = render(<FaceList {...props} />)
  return {
    wrapper
  }
}

describe('FaceList', () => {
  it('should render a header component', async () => {
    const props: FaceListProps = {
      faces: []
    };
    const { wrapper } = setup(props);
    const result = await wrapper.findAllByText('Faces');
    expect(result.length).toBe(1)
  })
  
  it('should render a list of FaceItem', async () => {
    const props: FaceListProps = {
      faces: [{id: 0, name: '', avatar: ''}]
    };
    const { wrapper } = setup(props);
    const images = await wrapper.findAllByTestId('image-0');
    expect(images.length).toBe(1);
  });
})
