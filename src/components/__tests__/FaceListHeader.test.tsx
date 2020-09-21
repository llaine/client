import { render } from '@testing-library/react-native';
import React from 'react';
import FaceListHeader from 'components/FaceListHeader';

describe('FaceListHeader', () => {
  it('should render a title text', async () => {
    const { findAllByText } = render(<FaceListHeader />);
    const text = await findAllByText('Faces');
    expect(text.length).toBe(1)
  })
})
