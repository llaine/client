import { render } from '@testing-library/react-native';
import FaceItem, { FaceItemProps } from 'components/FaceItem';
import React from 'react';

const setup = (setupProps: Partial<FaceItemProps> = {}) => {
  const defaultProps: FaceItemProps = {
    face: { id: 0, avatar: 'avatar', name: 'name' }
  }
  const props = { ...defaultProps, ...setupProps };
  const wrapper = render(<FaceItem {...props} />);

  return {
    wrapper 
  }
}

describe('FaceItem', () => {
  it('should render an Image and two Text elements', async () => {
    const expectedFace = { id: 1, avatar: 'avatar2', name: 'name2' };
    const { wrapper } = setup({ face: expectedFace })
    const image = await wrapper.findAllByTestId(`image-${expectedFace.id}`);
    const textOne = await wrapper.findByText(expectedFace.name);
    const textTwo = await wrapper.findByText(expectedFace.id.toString());
    
    expect(image.length).toBe(1);
    expect(textOne).toBeTruthy();
    expect(textTwo).toBeTruthy();
  })
})
